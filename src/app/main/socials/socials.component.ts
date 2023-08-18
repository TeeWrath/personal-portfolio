import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent {

  socials = {
    linkedin : 'https://www.linkedin.com/in/subroto-banerjee-70983b214/',
    twitter : 'https://twitter.com/Subroto0108',
    github : 'https://github.com/TeeWrath',
    insta : 'https://www.instagram.com/subroto._banerjee/',
    facebook : 'https://www.facebook.com/subroto.banerjee.56/',
    reddit : 'https://www.reddit.com/user/TeeWrath'
  }
}
