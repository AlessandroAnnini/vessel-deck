import AuthForm from '@/components/AuthForm';

export default function Signin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AuthForm mode="signin" />
    </div>
  );
}
