import DeleteUser from "@/components/delete-user";
import HeadingSmall from "@/components/heading-small";
import InputError from "@/components/input-error";
import {
  languages,
  useLanguage,
} from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AppLayout from "@/layouts/app-layout";
import SettingsLayout from "@/layouts/settings/layout";
import { type BreadcrumbItem, type SharedData } from "@/types";
import { Transition } from "@headlessui/react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

type ProfileForm = {
  name: string;
  email: string;
};

export default function Profile({
  mustVerifyEmail,
  status,
}: { mustVerifyEmail: boolean; status?: string }) {
  const { auth } = usePage<SharedData>().props;
  const languageProvider = useLanguage();
  const [chosenLanguage, setChosenLanguage] = useState(
    localStorage.getItem("lang") || "en",
  );

  const breadcrumbs: BreadcrumbItem[] = [
    {
      title:languageProvider.get("settings.profile.title"),
      href: "/settings/profile",
    },
  ];
  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm<Required<ProfileForm>>({
      name: auth.user.name,
      email: auth.user.email,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("lang", chosenLanguage);
    patch(route("profile.update"), {
      preserveScroll: true,
    });
    window.location.reload();
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={languageProvider.get("settings.title")} />

      <SettingsLayout>
        <div className="space-y-6">
          <HeadingSmall
            title={languageProvider.get("settings.profile.form.title")}
            description={languageProvider.get(
              "settings.profile.form.description",
            )}
          />

          <form onSubmit={submit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">
                {languageProvider.get("settings.profile.form.name")}
              </Label>

              <Input
                id="name"
                className="mt-1 block w-full"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                required
                autoComplete="name"
                placeholder={languageProvider.get(
                  "settings.profile.form.name.placeholder",
                )}
              />

              <InputError className="mt-2" message={errors.name} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">
                {languageProvider.get("settings.profile.form.email")}
              </Label>

              <Input
                id="email"
                type="email"
                className="mt-1 block w-full"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                required
                autoComplete="username"
                placeholder={languageProvider.get(
                  "settings.profile.form.email",
                )}
              />

              <InputError className="mt-2" message={errors.email} />
            </div>
            <div className="flex flex-col">
              <Select onValueChange={(v) => setChosenLanguage(v)}>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={languageProvider.get("common.select.language")}
                  />
                </SelectTrigger>
                <SelectContent>
                  {Array.from(languages.entries()).map(([key, value]) => {
                    return (
                      <SelectItem key={key} value={key}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* {mustVerifyEmail && auth.user.email_verified_at === null && ( */}
            {/*   <div> */}
            {/*     <p className="text-muted-foreground -mt-4 text-sm"> */}
            {/*       Your email address is unverified.{" "} */}
            {/*       <Link */}
            {/*         href={route("verification.send")} */}
            {/*         method="post" */}
            {/*         as="button" */}
            {/*         className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500" */}
            {/*       > */}
            {/*         Click here to resend the verification email. */}
            {/*       </Link> */}
            {/*     </p> */}
            {/**/}
            {/*     {status === "verification-link-sent" && ( */}
            {/*       <div className="mt-2 text-sm font-medium text-green-600"> */}
            {/*         A new verification link has been sent to your email address. */}
            {/*       </div> */}
            {/*     )} */}
            {/*   </div> */}
            {/* )} */}

            <div className="flex items-center gap-4">
              <Button disabled={processing}>
                {languageProvider.get("action.save")}
              </Button>

              <Transition
                show={recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
              >
                <p className="text-sm text-neutral-600">
                  {languageProvider.get("message.saved")}
                </p>
              </Transition>
            </div>
          </form>
        </div>

        <DeleteUser />
      </SettingsLayout>
    </AppLayout>
  );
}
