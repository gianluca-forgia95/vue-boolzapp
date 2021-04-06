var root = new Vue({
el: '#root',
data: {
  contacts: [
   {
       name: 'Michele',
       avatar: '_1',
       visible: true,
       lastSeen: '20:45',
       dayLastSeen: 'Ieri',
       messages: [{
           date: '10/01/2020 15:30:55',
           message: 'Hai portato a spasso il cane?',
           status: 'sent'
       },
           {
               date: '10/01/2020 15:50:00',
               message: 'Ricordati di dargli da mangiare',
               status: 'sent'
           },
           {
               date: '10/01/2020 16:15:22',
               message: 'Tutto fatto!',
               status: 'received'
           }
       ],
   },
   {
       name: 'Fabio',
       avatar: '_2',
       visible: true,
       lastSeen: '0:41',
       dayLastSeen: 'Ieri',
       messages: [{
           date: '20/03/2020 16:30:00',
           message: 'Ciao come stai?',
           status: 'sent'
       },
           {
               date: '20/03/2020 16:30:55',
               message: 'Bene grazie! Stasera ci vediamo?',
               status: 'received'
           },
           {
               date: '20/03/2020 16:35:00',
               message: 'Mi piacerebbe ma devo andare a fare la spesa.',
               status: 'sent'
           }
       ],
   },
   {
       name: 'Samuele',
       avatar: '_3',
       visible: true,
       lastSeen: '20:22',
       dayLastSeen: 'Oggi',
       messages: [{
           date:  '28/03/2020 10:10:40',
           message: 'La Marianna va in campagna',
           status: 'received'
       },
           {
               date:  '28/03/2020 10:20:10',
               message: 'Sicuro di non aver sbagliato chat?',
               status: 'sent'
           },
           {
               date:  '28/03/2020 10:20:10',
               message: 'Ah scusa!',
               status: 'received'
           }
       ],
   },
   {
       name: 'Luisa',
       avatar: '_io',
       visible: true,
       lastSeen: '10:45',
       dayLastSeen: 'Oggi',
       messages: [{
           date: "12/25/1995 11:12:45",
           message: 'Lo sai che ha aperto una nuova pizzeria?',
           status: 'sent'
       },
           {
               date: '10/01/2020 15:50',
               message: 'Si, ma preferirei andare al cinema',
               status: 'received'
           }
       ],
   },
],
 emoji: [
   '😀','😃','😄',
   '😁','😆','😅',
   '😂','🤣','😊',
   '😇','🙂','🙃',
   '😉','😌','😍',
   '🥰','😘','😗',
   '😙','😚','😋',
   '😛','😝','🤪',
   '🤬','🤯','🤡',
   '💪','👋🏼','👩‍🔬',
   '👨‍🔬','🧙‍♀️','👩‍❤️‍👩',
   '🧦','🥽','🤑',
   '🤖','👺','👾',
   '👻','😷','🥶',
   '😺','💼','🧦'
],

 contactIndex: 0,
 userMsg: '',
 search: '',
 showEmoji: false,

   },
   methods: {
     changeUser: function(index) {
       this.contactIndex = index;
     },

     addMsg: function(index) {
       if (this.userMsg != "" ) {
           const newMsg = {
                message: this.userMsg,
                date: dayjs().format('DD/MM/YYYY HH:mm'),
                status: 'sent'
                };
               this.contacts[index].messages.push(newMsg);
               this.userMsg = '';
               setTimeout( this.answerOk , 1000);
            }
         },

     answerOk: function() {
       const fakeAnswer = {
         message: 'ok',
         date: dayjs().format('DD/MM/YYYY HH:mm'),
         status: 'received'
       };
       this.contacts[this.contactIndex].messages.push(fakeAnswer);
     },

     addEmoji: function(icon){
            this.userMsg += this.emoji[icon];
        },

        removeChat : function( i ){
         this.contacts.splice(i, 1);
        }

   },

   computed: {
     filteredContacts: function() {
       return this.contacts.filter((contact) => {
          return contact.name.toLowerCase().match(this.search);
       });
     }

   }

});
