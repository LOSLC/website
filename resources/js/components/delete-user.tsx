import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";

import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import HeadingSmall from "@/components/heading-small";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "./providers/language-provider";

export default function DeleteUser() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const languageProvider = useLanguage();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
    clearErrors,
  } = useForm<Required<{ password: string }>>({ password: "" });

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    clearErrors();
    reset();
  };

  return (
    <div className="space-y-6">
      <HeadingSmall
        title={languageProvider.get("settings.profile.delete.title")}
        description={languageProvider.get(
          "settings.profile.delete.description",
        )}
      />
      <div className="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
        <div className="relative space-y-0.5 text-red-600 dark:text-red-100">
          <p className="font-medium">
            {languageProvider.get("settings.profile.delete.warning.title")}
          </p>
          <p className="text-sm">
            {languageProvider.get(
              "settings.profile.delete.warning.description",
            )}
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">
              {languageProvider.get("settings.profile.delete.btn")}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>
              {languageProvider.get("settings.profile.delete.confirm.title")}
            </DialogTitle>
            <DialogDescription>
              {languageProvider.get(
                "settings.profile.delete.confirm.description",
              )}
            </DialogDescription>
            <form className="space-y-6" onSubmit={deleteUser}>
              <div className="grid gap-2">
                <Label htmlFor="password" className="sr-only">
                  {languageProvider.get("field.password")}
                </Label>

                <Input
                  id="password"
                  type="password"
                  name="password"
                  ref={passwordInput}
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  placeholder={languageProvider.get("field.password")}
                  autoComplete="current-password"
                />

                <InputError message={errors.password} />
              </div>

              <DialogFooter className="gap-2">
                <DialogClose asChild>
                  <Button variant="secondary" onClick={closeModal}>
                    {languageProvider.get("action.cancel")}
                  </Button>
                </DialogClose>

                <Button variant="destructive" disabled={processing} asChild>
                  <button type="submit">
                    {languageProvider.get("settings.profile.delete.btn")}
                  </button>
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
