"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function DownloadBrochureModal({ isOpen, onClose }: Props) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const recaptchaRef = useRef<ReCAPTCHA | null>(null)

  const resetCaptcha = () => {
    setCaptchaToken(null)
    recaptchaRef.current?.reset()
  }

  const handleClose = () => {
    resetCaptcha()
    onClose()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!captchaToken) {
      alert("Please verify that you are not a robot.")
      return
    }

    setLoading(true)
    const form = e.currentTarget

    emailjs
      .sendForm(
        "service_t4m3upz",
        "template_q0ttf57",
        form,
        "5_NdmF3PRLPKBnpD7"
      )
      .then(() => {
        setLoading(false)
        setSuccess(true)

        setTimeout(() => {
          const link = document.createElement("a")
          link.href = "/catalog.pdf"
          link.download = "catalog.pdf"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

          setSuccess(false)
          resetCaptcha()
          onClose()
        }, 1400)
      })
      .catch(() => {
        setLoading(false)
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-2xl border border-[#cb972b]/30 bg-[#141414] p-5 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#f9e3aa]/70 hover:text-[#cb972b]"
            >
              ✕
            </button>

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto mb-6 h-16 w-16 rounded-full border border-[#cb972b] bg-[#cb972b]/10 flex items-center justify-center text-[#cb972b] text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl text-[#f9e3aa]">Access Granted</h3>
                  <p className="text-sm text-[#cbbf9c] mt-2">
                    Downloading brochure…
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h2 className="text-2xl text-[#f9e3aa]">
                    Download Brochure
                  </h2>

                  <input
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full bg-[#1c1c1c] px-4 py-3 text-[#f9e3aa] border border-[#cb972b]/20 rounded-lg outline-none"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full bg-[#1c1c1c] px-4 py-3 text-[#f9e3aa] border border-[#cb972b]/20 rounded-lg outline-none"
                  />

                  <input
                    name="phone"
                    required
                    placeholder="Phone with Country Code"
                    className="w-full bg-[#1c1c1c] px-4 py-3 text-[#f9e3aa] border border-[#cb972b]/20 rounded-lg outline-none"
                  />

                  {/* ✅ reCAPTCHA (NO CHANGE on desktop) */}
                  <div className="flex justify-center overflow-hidden">
                    <div className="origin-center scale-90 sm:scale-95 md:scale-100">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LfTDF0sAAAAAA-Uv4PT4PEVLe1CB3O5LK0H8oX_"
                        theme="dark"
                        onChange={(token) => setCaptchaToken(token)}
                        onExpired={() => setCaptchaToken(null)}
                        onErrored={() => setCaptchaToken(null)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !captchaToken}
                    className="w-full bg-[#cb972b] py-3 text-black font-semibold rounded-lg hover:bg-[#f9e3aa] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send & View Brochure"}
                  </button>

                  {!captchaToken && (
                    <p className="text-center text-xs text-[#f9e3aa]/60">
                      Please complete the captcha to continue.
                    </p>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
