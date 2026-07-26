"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AlertCircle, ArrowUpRight, Check, LoaderCircle, Mail } from "lucide-react";
import { portfolio } from "@/lib/portfolio-data";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least two characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Tell me a little more about the project."),
  website: z.string().optional(),
});

type ContactFields = z.infer<typeof contactSchema>;
type SubmissionStatus = "idle" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<ContactFields>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFields) => {
    setStatus("idle");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${portfolio.person.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: `Portfolio inquiry from ${values.name}`,
          _template: "table",
          _honey: values.website ?? "",
        }),
      });

      const result = await response.json() as { success?: boolean | string };
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("Message delivery failed.");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
      <div className="contact__header" data-reveal>
        <span className="mono-label">06 / OPEN CHANNEL</span>
        <h2 id="contact-title">Let’s discuss your<br /><em>next project.</em></h2>
        <a href={`mailto:${portfolio.person.email}`} data-cursor="link">
          {portfolio.person.email} <ArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="contact__body">
        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => status !== "idle" && setStatus("idle")}
          noValidate
          data-reveal
        >
          <div className="form-field">
            <label htmlFor="name"><span className="mono-label">01</span> YOUR NAME</label>
            <input id="name" autoComplete="name" placeholder="What should I call you?" {...register("name")} />
            {errors.name && <p role="alert">{errors.name.message}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="email"><span className="mono-label">02</span> YOUR EMAIL</label>
            <input id="email" type="email" autoComplete="email" placeholder="you@company.com" {...register("email")} />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="message"><span className="mono-label">03</span> THE BRIEF</label>
            <textarea id="message" rows={4} placeholder="A product, a platform, or a problem..." {...register("message")} />
            {errors.message && <p role="alert">{errors.message.message}</p>}
          </div>

          <div className="form-honeypot" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
          </div>

          <button className="form-submit" type="submit" disabled={isSubmitting} data-magnetic data-cursor="link">
            {isSubmitting ? (
              <><LoaderCircle className="form-submit__spinner" aria-hidden="true" /> Sending securely</>
            ) : status === "success" ? (
              <><Check aria-hidden="true" /> Message sent</>
            ) : (
              <>Send inquiry <ArrowUpRight aria-hidden="true" /></>
            )}
          </button>

          <div className="form-feedback" aria-live="polite">
            {status === "success" && (
              <p className="form-feedback__success">
                <Check aria-hidden="true" /> Delivered. I’ll reply to the email address you provided.
              </p>
            )}
            {status === "error" && (
              <p className="form-feedback__error">
                <AlertCircle aria-hidden="true" /> Delivery failed. Please{" "}
                <a href={`mailto:${portfolio.person.email}?subject=${encodeURIComponent("Portfolio inquiry")}`}>
                  email me directly
                </a>.
              </p>
            )}
          </div>

          <p className="form-note mono-label">
            <Mail aria-hidden="true" /> Secure delivery to {portfolio.person.email}
          </p>
        </form>

        <aside className="contact__aside" data-reveal>
          <div>
            <span className="mono-label">CURRENT STATUS</span>
            <p><i /> {portfolio.person.availability}</p>
          </div>
          <div>
            <span className="mono-label">SOCIAL FREQUENCIES</span>
            {portfolio.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" data-cursor="link">
                {social.label} <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
          <div>
            <span className="mono-label">LOCAL TIMEZONE</span>
            <p>UTC +05:30 / {portfolio.person.location}</p>
            <a href={`tel:${portfolio.person.phone.replace(/\s/g, "")}`} data-cursor="link">
              {portfolio.person.phone} <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
