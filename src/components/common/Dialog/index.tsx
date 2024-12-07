import { Button } from '@components/ui/button';
import {
  Dialog as DialogBox,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@components/ui/dialog';
import { ReactNode } from 'react';

export function Dialog({
  children,
  title,
  description,
  isOpen,
  closeModal,
  footer,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
  isOpen: boolean;
  closeModal: () => void;
  footer?: ReactNode;
}) {
  return (
    <DialogBox open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="w-full max-w-[650px] p-0 gap-0">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="grid gap-4">{children}</div>
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </DialogBox>
  );
}
