import type { Metadata } from 'next';
import ForgotPasswordClient from './ForgotPasswordClient';
import { buildPageMetadata } from '@/src/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Forgot Password',
  description: 'Reset your Play1 account password.',
  path: '/forgot-password',
  keywords: ['reset password', 'play1 account recovery'],
});

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />;
}
