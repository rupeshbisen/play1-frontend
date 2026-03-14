import type { Metadata } from 'next';
import ForgotPasswordClient from './ForgotPasswordClient';

export const metadata: Metadata = {
  title: 'Forgot Password | Play1 - Real-Time Sports Platform',
  description: 'Reset your Play1 account password.',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />;
}
