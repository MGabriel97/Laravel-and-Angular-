import { LanguageComponent } from './../language/language.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Selector='';translations={};
  constructor() {
   }

  ngOnInit(): void {
    this.Selector=LanguageComponent.languageStorage;
    this.translations=
    {
      'EN':['ABOUT FORUM',"An Internet forum or message forum is an online discussion site where people can hold conversations in the form of posted messages. They differ from chat rooms because messages are often longer than a text line and are archived at least temporarily. Also, depending on a user's access level or forum configuration, a posted message may need to be approved by a moderator before it becomes publicly visible.",'STRUCTURE',"A forum consists of a tree-like director structure. The top end is Categories. A forum can be divided into categories for relevant discussions. There are sub-forums in these categories, and these sub-forums may have several sub-forums. Topics (commonly referred to as topics) are below the lowest level of sub-forums and these are the places where members can start their discussions or posts. All message boards will use one of three possible display formats. Each of the three display formats of the basic message board: Non-Threaded / Semi-Threaded / Completely Threaded, has its own advantages and disadvantages. If the messages are not linked at all, it is best for a non-threaded format.","Send a message",'Name','Message','Send'],
      'RO':['DESPRE FORUM',"Un forum de internet sau un forum de mesaje este un site de discuții online în care oamenii pot ține conversații sub formă de mesaje postate. Ele diferă de camerele de chat, deoarece mesajele sunt adesea mai lungi decât o linie de text și sunt arhivate cel puțin temporar. De asemenea, în funcție de nivelul de acces al unui utilizator sau de configurarea forumului, un mesaj postat ar putea fi necesar să fie aprobat de un moderator înainte de a deveni public vizibil.",'STRUCTURA','Un forum constă dintr-o structură de director asemănătoare arborelui. Capătul superior este „Categorii”. Un forum poate fi împărțit în categorii pentru discuțiile relevante. În categorii sunt sub-forumuri, iar aceste sub-forumuri pot avea mai multe sub-forumuri. Subiectele (denumite în mod obișnuit subiecte) se află sub cel mai scăzut nivel de sub-forumuri și acestea sunt locurile în care membrii își pot începe discuțiile sau postările. Toate panourile de mesaje vor folosi unul dintre cele trei formate de afișare posibile. Fiecare dintre cele trei formate de afișare a tabloului de mesaje de bază: Non-Threaded / Semi-Threaded / Complet Threaded, are propriile avantaje și dezavantaje. Dacă mesajele nu sunt deloc legate între ele, cel mai bine este un format non-Threaded.','Trimite un mesaj','Nume','Mesaj','Trimite']
    }
  }
}
