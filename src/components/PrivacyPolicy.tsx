import React from 'react'
import { Link } from 'wouter'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <h2>Privacy Policy</h2>
      <p>
        This is a placeholder for the privacy policy. The actual privacy policy will be added here in the future.
      </p>
      <p>
        We take your privacy seriously and will only use your personal information to provide the services you have requested.
      </p>
      <Link href="/pawpath">Return to Home</Link>
    </div>
  )
}

export default PrivacyPolicy 