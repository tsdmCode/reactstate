interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  return (
    <div className="modalWrapper">
      <dialog open>{children}</dialog>
    </div>
  );
}
