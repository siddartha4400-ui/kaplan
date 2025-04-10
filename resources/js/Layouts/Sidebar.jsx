import React, { useState, useEffect } from 'react';
import { usePage, Link } from '@inertiajs/inertia-react';

const Sidebar = () => {
  const { props } = usePage();
  const [captcha, setCaptcha] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    captchaInput: '',
    formtype: 'sidebarform'
  });
  const [emailError, setEmailError] = useState('');
  
  // Get data passed from Laravel controller
  const { editorsObjdata, arrayOfEditorsData, jid, type } = props;

  // Generate random captcha
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(result);
  };

  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? '' : 'Invalid email address.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.captchaInput !== captcha) {
      alert('Captcha verification failed!');
      return;
    }
    
    if (emailError) {
      return;
    }
    
    // Submit form using Inertia
    Inertia.post('/getdatafromforms', formData, {
      onSuccess: () => {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          captchaInput: '',
          formtype: 'sidebarform'
        });
        generateCaptcha();
      }
    });
  };

  const isAboutJournalPage = window.location.pathname.includes('about-journal');

  return (
    <div className="border-start ms-lg-auto" id="blog-sidebar">
      <div className="py-grid-gutter py-lg-1 px-lg-4">
        <div className="">
          {isAboutJournalPage && (
            <div className="list-group widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2" role="tablist">
              <Link 
                href={`/about-journal?jid=${jid}&type=about`} 
                className={`list-group-item list-group-item-action ${type === 'about' ? 'active' : ''}`}
              >
                About Journal
              </Link>
              <Link 
                href={`/about-journal?jid=${jid}&type=editorspanel`} 
                className={`list-group-item list-group-item-action ${type === 'editorspanel' ? 'active' : ''}`}
              >
                Editorial Panel
              </Link>
              <Link 
                href={`/about-journal?jid=${jid}&type=articalinpress`} 
                className={`list-group-item list-group-item-action ${type === 'articalinpress' ? 'active' : ''}`}
              >
                Article in Press
              </Link>
              <Link 
                href={`/about-journal?jid=${jid}&type=currentissue`} 
                className={`list-group-item list-group-item-action ${type === 'currentissue' ? 'active' : ''}`}
              >
                Current Issue
              </Link>
              <Link 
                href={`/about-journal?jid=${jid}&type=archive`} 
                className={`list-group-item list-group-item-action ${type === 'archive' || type === 'issues' ? 'active' : ''}`}
              >
                Archive
              </Link>
              <Link href="/online_manuscript" className="list-group-item list-group-item-action">
                Submit Manuscript
              </Link>
              <Link 
                href={`/about-journal?jid=${jid}&type=publicationcharges`} 
                className={`list-group-item list-group-item-action ${type === 'publicationcharges' ? 'active' : ''}`}
              >
                Publication Charges
              </Link>
              <Link href="/pay-online" className="list-group-item list-group-item-action">
                Payment
              </Link>
            </div>
          )}

          {/* Member In section */}
          <div className="widget mb-grid-gutter pb-grid-gutter mx-lg-2">
            <h3 className="widget-title mt-2">Member In</h3>
            {editorsObjdata && editorsObjdata.length > 0 && (
              <div className="tns-carousel tns-controls-static tns-controls-inside">
                <div 
                  className="tns-carousel-inner" 
                  data-carousel-options='{"items": 2, "nav": false, "controls": false, "autoplay": true, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 18},"768":{"items":2, "gutter": 20}, "1100":{"gutter": 24}}}'
                >
                  <div className="col-6">
                    <a href={JSON.parse(editorsObjdata[4]?.path)?.link} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={JSON.parse(editorsObjdata[4]?.path)?.path} 
                        alt="Member 1" 
                        style={{ border: '1px solid #000', padding: '2px', marginBottom: '10px' }}
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href={JSON.parse(editorsObjdata[6]?.path)?.link} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={JSON.parse(editorsObjdata[6]?.path)?.path} 
                        alt="Member 2" 
                        style={{ border: '1px solid #000', padding: '2px', marginBottom: '10px' }}
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href={JSON.parse(editorsObjdata[5]?.path)?.link} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={JSON.parse(editorsObjdata[5]?.path)?.path} 
                        alt="Member 3" 
                        style={{ border: '1px solid #000', padding: '2px', marginBottom: '10px' }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-12 pb-4 pt-2 float-end" style={{ textAlign: 'right' }}>
                  <Link href="/" className="btn btn-primary btn-sm">View All</Link>
                </div>
              </div>
            )}
          </div>

          <div className="border-top pt-3 mt-3"></div>

          {/* Our Editors section */}
          <div className="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
            <h3 className="widget-title">Our Editors</h3>
            <div className="tns-carousel tns-controls-sm">
              <div className="tns-carousel-inner" data-carousel-options='{"mode": "gallery", "nav": false, "autoplay": true, "controls": false}'>
                {arrayOfEditorsData && arrayOfEditorsData.length > 0 ? (
                  arrayOfEditorsData.map(editor => (
                    <div key={editor.id}>
                      <div className="bg-faded-primary text-center py-4 px-3">
                        <img 
                          src={editor.photo} 
                          className="img-thumbnail rounded-circle" 
                          alt={editor.name} 
                          style={{ width: '120px' }}
                        />
                        <h5 className="from-top">{editor.name}</h5>
                        <p className="mb-1 pb-3 from-bottom delay-1">{editor.qualification}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No data available.</div>
                )}
              </div>
            </div>
          </div>

          {/* Article Status Form */}
          <div className="widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
            <h3 className="widget-title">Know Your Article Status</h3>
            <form id="emailFormsidebar" onSubmit={handleSubmit}>
              <input 
                style={{ opacity: 0 }} 
                value="sidebarform" 
                type="text" 
                name="formtype" 
                readOnly 
              />
              
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text" 
                  id="cf-name" 
                  placeholder="Your Name" 
                  required 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text" 
                  id="emailsidebar" 
                  placeholder="Email" 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              {emailError && <span id="result" style={{ color: 'red' }}>{emailError}</span>}
              
              <div className="row mb-3">
                <div className="col-8">
                  <div id="captcha-display" className="captcha-input form-control">{captcha}</div>
                </div>
                <div className="col-4">
                  <button 
                    className="btn btn-outline-primary rounded-pill" 
                    type="button" 
                    onClick={generateCaptcha}
                  >
                    Refresh
                  </button>
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="captcha">Captcha:</label>
                <input 
                  className="form-control" 
                  type="text" 
                  id="captcha" 
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <button className="btn btn-primary btn-sm" type="submit">Submit</button>
            </form>
          </div>

          {/* Newsletter section */}
          <div className="widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
            <h3 className="widget-title mt-2">Subscribe to Newsletter</h3>
            <p>Get All Our Latest Updates</p>
            <div className="tdi_105 tdn-image-wrap" style={{ backgroundColor: '#fffbcf' }}>
              <Link href="/newsletter">
                <img src="/img/Popup-Email-Subscription.jpg" alt="Newsletter" />
              </Link>
            </div>
          </div>

          {/* Plagiarism Software section */}
          <div className="widget pb-grid-gutter mx-lg-2">
            <h3 className="widget-title mt-2">Plagiarism Software</h3>
            <div className="tdi_105 tdn-image-wrap" style={{ backgroundColor: '#fffbcf' }}>
              <img src="/img/plagarism.png" alt="Plagiarism Software" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


// use Inertia\Inertia;

// class JournalController extends Controller
// {
//     public function aboutJournal()
//     {
//         // Your existing PHP logic to get data
//         $editorsObj = new CrudOperations();
//         $editorsObjdata = $editorsObj->selectDataAll('slider');
//         $arrayOfEditors = !empty($editorsObjdata) ? implode(',', json_decode($editorsObjdata[3]['path'])) : "";
//         $arrayOfEditorsData = !empty($arrayOfEditors) 
//             ? $editorsObj->selectDataByCondition('editors', "id IN($arrayOfEditors)")
//             : [];

//         return Inertia::render('AboutJournal', [
//             'editorsObjdata' => $editorsObjdata,
//             'arrayOfEditorsData' => $arrayOfEditorsData,
//             'jid' => request('jid'),
//             'type' => request('type')
//         ]);
//     }
// }