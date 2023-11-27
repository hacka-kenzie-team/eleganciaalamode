export const FormSubmitButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <button
      type="submit"
      className="w-full bg-primary md:bg-second h-12 rounded-md text-second md:text-primary hover:scale-[1.02] transition-all"
    >
      {children}
    </button>
  );
};
