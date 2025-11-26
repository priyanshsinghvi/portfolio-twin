import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  GithubIcon,
  InstagramIcon,
  Linkedin,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: 'Email',
      value: 'priyanshsinghvi0308@gmail.com',
      href: 'mailto:priyanshsinghvi0308@gmail.com',
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 89490599XX',
      href: 'tel:+9189490599XX',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'priyanshsinghvi',
      href: 'https://linkedin.com/in/priyanshsinghvi',
    },
    {
      icon: <GithubIcon className="h-5 w-5" />,
      label: 'GitHub',
      value: 'priyanshsinghvi',
      href: 'https://github.com/priyanshsinghvi',
    },
    {
      icon: <TwitterIcon className="h-5 w-5" />,
      label: 'Twitter',
      value: '@anyone_priyansh',
      href: 'https://twitter.com/anyone_priyansh',
    },
    {
      icon: <InstagramIcon className="h-5 w-5" />,
      label: 'Instagram',
      value: '@priyansh.none',
      href: 'https://instagram.com/priyansh.none',
    },
  ];

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardContent className="space-y-4 pt-6">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">Let's Connect! 🚀</h2>
          <p className="text-muted-foreground">
            Always excited to discuss AI, automation, or crazy project ideas!
          </p>
        </div>

        <Separator className="my-6" />

        <div className="space-y-3">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <div className="flex items-center gap-3">
                <div className="text-primary">{item.icon}</div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
              <svg
                className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-accent/50 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Pro tip:</strong> I respond fastest on LinkedIn and Email!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};