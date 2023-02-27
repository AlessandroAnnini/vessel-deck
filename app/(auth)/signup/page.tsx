import AuthForm from '@/components/AuthForm';

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AuthForm mode="signup" />
    </div>
  );
}
