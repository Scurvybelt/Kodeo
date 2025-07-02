import { Component } from '@angular/core';
import { AiWriterFancyBannerSectionComponent } from '../../ai-writer-default/sections/ai-writer-fancy-banner-section/ai-writer-fancy-banner-section.component';
import { FeedbackSectionComponent } from "../../ai-writer-default/sections/feedback-section/feedback-section.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-v2',
  standalone: true,
  imports: [AiWriterFancyBannerSectionComponent,CommonModule,RouterModule],
  templateUrl: './blog-v2.component.html',
  styleUrl: './blog-v2.component.scss'
})
export class BlogV2Component {
  blogPosts = [
    {
      date: "13 Apr",
      image: "assets/images/blog/blog_img_06.jpg",
      author: "Rashed Ka",
      readingTime: "6 min",
      category: "Finance",
      title: "Spending Habits, 13 Tips for grow Your Money.",
      link: "/digital-agency/blog-details"
    },
    {
      date: "09 FEB",
      image: "assets/images/blog/blog_img_07.jpg",
      author: "Jannat Firlo",
      readingTime: "5 min",
      category: "Travel",
      title: "Our Travel Card Makes you Happy.",
      link: "/digital-agency/blog-details"
    },
    {
      quote:
        '"Budget your desires, investing knowledge, & let compound interest build your future."',
      author: "James Bond",
      designation: "Founder Agro",
      icon: "assets/images/icon/icon_16.svg",
      link: "/digital-agency/blog-details"
    },
    {
      date: "09 FEB",
      image: "assets/images/blog/blog_img_08.jpg",
      author: "Aslmia Uddin",
      readingTime: "7 min",
      category: "Banking",
      title: "Manage your Online Banking & Get Rewarded",
      link: "/digital-agency/blog-details"
    },
    {
      date: "24 Dec",
      image: "assets/images/blog/blog_img_09.jpg",
      author: "Jubayer Hasan",
      readingTime: "3 min",
      category: "Business",
      title: "It’s easy to Buildup your Business with us",
      link: "/digital-agency/blog-details"
    }
  ];

}
