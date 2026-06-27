import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

// ── EmailJS credentials ──────────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free, 200 emails/month)
// 2. Add Email Service → connect your Gmail → copy the Service ID below
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set "To email" = siripuramrahul3@gmail.com → copy the Template ID below
// 4. Go to Account → Public Key → copy it below
const EMAILJS_SERVICE_ID  = 'service_pgur4sf';
const EMAILJS_TEMPLATE_ID = 'template_1ui39hv';
const EMAILJS_PUBLIC_KEY  = 'v9u9ohNvy8dbDLBBB';
// ─────────────────────────────────────────────────────────────────────────────

interface ContactCard {
  icon: string;
  label: string;
  value: string;
  display: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements AfterViewInit {
  formData = { name: '', email: '', message: '' };

  sending = false;
  sent    = false;
  error   = '';

  contactCards: ContactCard[] = [
    {
      icon: '✉',
      label: 'Email',
      value: 'siripuramrahul3@gmail.com',
      display: 'siripuramrahul3@gmail.com',
      href: 'mailto:siripuramrahul3@gmail.com',
    },
    {
      icon: 'in',
      label: 'LinkedIn',
      value: 'linkedin.com/in/siripuram-rahul',
      display: '/in/siripuram-rahul',
      href: 'https://www.linkedin.com/in/siripuram-rahul/',
    },
    {
      icon: 'gh',
      label: 'GitHub',
      value: 'github.com/Rahul-Siripuram1',
      display: '/Rahul-Siripuram1',
      href: 'https://github.com/Rahul-Siripuram1',
    },
  ];

  async submitForm(): Promise<void> {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.sending = true;
    this.error   = '';

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  this.formData.name,
          from_email: this.formData.email,
          message:    this.formData.message,
          to_name:    'Rahul',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      this.sent     = true;
      this.formData = { name: '', email: '', message: '' };

      // Reset success message after 5s
      setTimeout(() => (this.sent = false), 5000);
    } catch (err: any) {
      this.error = 'Something went wrong. Please try emailing directly.';
    } finally {
      this.sending = false;
    }
  }

  ngAfterViewInit(): void {
    gsap.from('.contact-heading', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-heading',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.utils.toArray<HTMLElement>('.contact-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        delay: i * 0.1,
      });
    });

    gsap.from('.contact-form', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      delay: 0.3,
    });
  }
}
