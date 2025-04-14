import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import jsPDF from 'jspdf'
import Template1 from '../TemplatesComponents/Template1'
import Template2 from '../TemplatesComponents/Template2'
import Template3 from '../TemplatesComponents/Template3'
import Template4 from '../TemplatesComponents/Template4'
import Template5 from '../TemplatesComponents/Template5'
import Template6 from '../TemplatesComponents/Template6'
import Template7 from '../TemplatesComponents/Template7'
import Template8 from '../TemplatesComponents/Template8'
import Template9 from '../TemplatesComponents/Template9'
import Template10 from '../TemplatesComponents/Template10'
import Template11 from '../TemplatesComponents/Template11'
import Template12 from '../TemplatesComponents/Template12'
import html2canvas from 'html2canvas'
import SuccessMessage from './Modal'

function MyResume() {
  const selectedTemplate = useSelector(
    (state) => state.dataStore.selectedTemplate
  )
  const [showModal, setShowModal] = useState(false)

  const downloadComponentPDF = () => {
    const input = document.getElementById('divToPrint')
    const pixelRatio = window.devicePixelRatio || 1 // Get device pixel ratio

    html2canvas(input, {
      scrollY: -window.scrollY,
      scale: pixelRatio, // Scale for high resolution

    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'pt', 'a4') // "pt" for points
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const imgWidth = canvas.width / pixelRatio // Adjust for scaling
        const imgHeight = (canvas.height / canvas.width) * pdfWidth // Maintain aspect ratio

        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight)
        pdf.save('resume.pdf')
      })
      .then(() => {
        setTimeout(() => {
          setShowModal(true)
          setTimeout(() => {
            setShowModal(false)
          }, 6000)
        }, 100)
      })
  }

  return (
    <div style={{ width: '100%', padding: '20px'}}>
      <div className='row mt-2'>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Link to='/detailsfillingpage/keyskills'>
            <button
              style={{
                padding: '10px',
                margin: '5px',
                backgroundColor: '#007bff',
                color: '#fff',
              }}
            >
              Go-Back
            </button>
          </Link>
          <button
            style={{
              padding: '10px',
              margin: '5px',
              backgroundColor: '#28a745',
              color: '#fff',
            }}
            onClick={downloadComponentPDF}
          >
            Save Resume
          </button>
        </div>
      </div>
      <div className='mt-2'style={{ flex: 1 }}>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}
        >
          <div id='outerdiv' style={{ height: '100%' }}>
            <div
              id='divToPrint'
              style={{
                height: '100%',
                width: '1200px',
                margin: '0 auto',
                transformOrigin: 'top left',
              }}
            >
              {/* Render the selected template */}
              {selectedTemplate === '' ? (
                <div>
                  <h1>Please select a template!</h1>
                </div>
              ) : selectedTemplate === 'Template 1' ? (
                <Template1 />
              ) : selectedTemplate === 'Template 2' ? (
                <Template2 />
              ) : selectedTemplate === 'Template 3' ? (
                <Template3 />
              ) : selectedTemplate === 'Template 4' ? (
                <Template4 />
              ) : selectedTemplate === 'Template 5' ? (
                <Template5 />
              ) : selectedTemplate === 'Template 6' ? (
                <Template6 />
              ) : selectedTemplate === 'Template 7' ? (
                <Template7 />
              ) : selectedTemplate === 'Template 8' ? (
                <Template8 />
              ) : selectedTemplate === 'Template 9' ? (
                <Template9 />
              ) : selectedTemplate === 'Template 10' ? (
                <Template10 />
              ) : selectedTemplate === 'Template 11' ? (
                <Template11 />
              ) : selectedTemplate === 'Template 12' ? (
                <Template12 />
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <SuccessMessage showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  )
}

export default MyResume
