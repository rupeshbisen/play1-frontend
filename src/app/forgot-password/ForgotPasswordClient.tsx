'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

const backdropStyle = {
  background:
    'radial-gradient(1200px at 20% 15%, rgba(56, 189, 248, 0.16), transparent 50%), radial-gradient(900px at 80% 0%, rgba(251, 191, 36, 0.12), transparent 45%), linear-gradient(120deg, rgba(15, 23, 42, 0.9), rgba(8, 47, 73, 0.75))',
};

export default function ForgotPasswordClient() {
  const [step, setStep] = useState<'email' | 'otp' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Refs for OTP inputs
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration - send OTP to email
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration - verify OTP
    setStep('password');
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Backend integration - reset password
  };

  const handleBackToEmail = () => {
    setStep('email');
    setOtp(['', '', '', '', '', '']); // Clear OTP when going back
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 opacity-80" style={backdropStyle} />
        <div className="absolute left-16 top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-12 bottom-6 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-x-8 inset-y-12 rounded-3xl border border-white/5 bg-white/5 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        <section className="flex-1 space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-50/70 ring-1 ring-white/10">
            <span>Password reset</span>
            <span
              className="h-1 w-1 rounded-full bg-amber-300/80"
              aria-hidden="true"
            />
            <span>Secure recovery</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              {step === 'email'
                ? 'Reset your password'
                : step === 'otp'
                  ? 'Verify OTP'
                  : 'Set new password'}
            </h1>
            <p className="max-w-2xl text-base text-slate-200/80 sm:text-lg">
              {step === 'email'
                ? "Enter your email address and we'll send you a one-time password (OTP) to verify your identity."
                : step === 'otp'
                  ? `We've sent a 6-digit OTP to ${email}. Enter it below to continue.`
                  : 'Create a strong password to secure your account.'}
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-100/80 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm">
              <div
                className="mb-2 h-2 w-12 rounded-full bg-cyan-300/70"
                aria-hidden="true"
              />
              <h3 className="text-base font-semibold text-white">
                {step === 'email' ? 'OTP verification' : 'Quick process'}
              </h3>
              <p className="mt-1 text-sm text-slate-200/75">
                {step === 'email'
                  ? 'Receive a one-time password instantly in your email to verify your identity.'
                  : 'Complete the verification process quickly and regain access to your account.'}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm">
              <div
                className="mb-2 h-2 w-12 rounded-full bg-amber-300/70"
                aria-hidden="true"
              />
              <h3 className="text-base font-semibold text-white">
                Secure process
              </h3>
              <p className="mt-1 text-sm text-slate-200/75">
                {step === 'email'
                  ? 'Time-limited OTP codes and email verification ensure your account stays protected.'
                  : 'Your new password will be encrypted and securely stored to protect your account.'}
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full max-w-lg">
          <div
            className="absolute -inset-x-4 -top-8 h-24 rounded-3xl bg-cyan-400/20 blur-3xl"
            aria-hidden="true"
          />
          <form
            onSubmit={
              step === 'email'
                ? handleSendOtp
                : step === 'otp'
                  ? handleVerifyOtp
                  : handleResetPassword
            }
            className="relative flex w-full flex-col gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-900/30 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-200/60">
                  {step === 'email'
                    ? 'Password reset'
                    : step === 'otp'
                      ? 'OTP verification'
                      : 'New password'}
                </p>
                <h2 className="text-xl font-semibold text-white">
                  {step === 'email'
                    ? 'Forgot password?'
                    : step === 'otp'
                      ? 'Enter OTP'
                      : 'Create password'}
                </h2>
              </div>
              <Link
                href="/"
                className="text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
              >
                Back to site
              </Link>
            </div>

            {step === 'email' && (
              <>
                <label
                  htmlFor="email"
                  className="space-y-2 text-sm font-medium text-slate-100/90"
                >
                  <span>Email</span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none ring-0 transition focus:border-cyan-300/60 focus:bg-white/10"
                  />
                </label>

                <button
                  type="submit"
                  disabled={!email}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-cyan-400 to-amber-300 px-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-900/30 transition disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                  title="Backend integration pending"
                >
                  Send OTP
                </button>
              </>
            )}

            {step === 'otp' && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-100/90">
                    Enter 6-digit OTP
                  </label>
                  <div className="flex gap-2 justify-between">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          otpRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-full h-14 text-center text-2xl font-semibold rounded-xl border border-white/10 bg-white/5 text-white outline-none ring-0 transition focus:border-cyan-300/60 focus:bg-white/10"
                        required
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleBackToEmail}
                  className="text-sm text-cyan-200 hover:text-cyan-100 transition"
                >
                  Change email address
                </button>

                <button
                  type="submit"
                  disabled={otp.some((digit) => digit.trim() === '')}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-cyan-400 to-amber-300 px-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-900/30 transition disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                  title="Backend integration pending"
                >
                  Verify OTP
                </button>

                <button
                  type="button"
                  className="text-sm text-slate-200/80 hover:text-cyan-200 transition"
                  disabled
                  title="Backend integration pending"
                >
                  Didn&apos;t receive OTP? Resend
                </button>
              </>
            )}

            {step === 'password' && (
              <>
                <label
                  htmlFor="newPassword"
                  className="space-y-2 text-sm font-medium text-slate-100/90"
                >
                  <span>New Password</span>
                  <input
                    id="newPassword"
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    placeholder="********"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none ring-0 transition focus:border-cyan-300/60 focus:bg-white/10"
                  />
                </label>

                <label
                  htmlFor="confirmPassword"
                  className="space-y-2 text-sm font-medium text-slate-100/90"
                >
                  <span>Confirm Password</span>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="********"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none ring-0 transition focus:border-cyan-300/60 focus:bg-white/10"
                  />
                </label>

                <button
                  type="submit"
                  disabled={
                    !newPassword ||
                    !confirmPassword ||
                    newPassword !== confirmPassword ||
                    newPassword.length < 8
                  }
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-cyan-400 to-amber-300 px-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-900/30 transition disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                  title="Backend integration pending"
                >
                  Reset Password
                </button>
              </>
            )}

            <p className="text-center text-sm text-slate-200/80">
              Remember your password?
              <span className="mx-1">|</span>
              <Link
                href="/login"
                className="font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                Sign in
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
