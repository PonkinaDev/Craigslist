import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MAX_FEATURES } from '../../data/listingForm'
import BasicInfoSection from './BasicInfoSection'
import ContactSection from './ContactSection'
import DetailsSection from './DetailsSection'
import LocationSection from './LocationSection'
import PrivacyNotice from './PrivacyNotice'
import PublishSuccess from './PublishSuccess'
import TipBanner from './TipBanner'

const actionButtonClasses =
  'rounded-md bg-brand px-8 py-2 text-sm font-medium text-page transition hover:brightness-110'

export default function PublishForm() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [features, setFeatures] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleFeature = (feature) =>
    setFeatures((current) => {
      if (current.includes(feature)) return current.filter((item) => item !== feature)
      return current.length < MAX_FEATURES ? [...current, feature] : current
    })

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    window.scrollTo(0, 0)
  }

  if (isSubmitted) return <PublishSuccess />

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BasicInfoSection
        title={title}
        onTitleChange={setTitle}
        description={description}
        onDescriptionChange={setDescription}
      />
      <DetailsSection features={features} onToggleFeature={toggleFeature} />
      <ContactSection />
      <LocationSection />

      <PrivacyNotice />

      <div className="flex items-center justify-between">
        <button type="button" onClick={() => navigate('/')} className={actionButtonClasses}>
          Cancelar
        </button>
        <button type="submit" className={actionButtonClasses}>
          Publicar
        </button>
      </div>

      <TipBanner />
    </form>
  )
}
