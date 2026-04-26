export default function Privacy() {
  const sections = [
    {
      title: '1. Independent Consultancy Notice',
      content: [
        'We provide independent consultancy services focused on improving systems, workflows, operations and business efficiency.',
        'Our services may involve recommending or implementing third-party tools and platforms, including Monday.com and related business systems.',
        'We are not affiliated with, endorsed by, partnered with, or operated by Monday.com or any third-party software provider unless explicitly stated.',
        'Any platform references relate solely to our practical experience using those tools to support growing businesses.',
      ],
    },
    {
      title: '2. Basis of Our Recommendations',
      intro: 'Our recommendations are tailored to the information shared with us and are based on:',
      list: [
        'Practical experience using business systems and workflow platforms',
        'Operational process improvement experience',
        'Workflow design and implementation knowledge',
        'Efficiency and growth-focused strategy',
        'The goals, challenges and priorities discussed with each client',
      ],
      outro: 'Recommendations are provided in good faith and are intended to support better structure, visibility and ways of working.',
    },
    {
      title: '3. Confidentiality',
      content: [
        'We understand that clients may share commercially sensitive or confidential information during consultations and implementation projects.',
        'Any information shared with us, including documents, internal processes, access credentials, reports, commercial data or operational details, will be treated confidentially and used only for the purpose of delivering the agreed services.',
      ],
      intro2: 'We do not knowingly disclose confidential client information to third parties unless:',
      list: [
        'Required to deliver an agreed service',
        'Required by law',
        'Expressly authorised by the client',
      ],
    },
    {
      title: '4. Information We May Collect',
      intro: 'Depending on the services provided, we may collect information such as:',
      list: [
        'Name and business details',
        'Contact information',
        'Enquiry details',
        'Project requirements',
        'Package selections',
        'System access details',
        'Workflow information',
        'Internal process information',
        'Documents or files voluntarily shared with us',
        'Signatures and submitted forms',
        'Communication history related to the project',
      ],
      outro: 'We only request information that is reasonably necessary to deliver our services.',
    },
    {
      title: '5. How We Use Information',
      intro: 'Information provided may be used for:',
      list: [
        'Responding to enquiries',
        'Arranging discovery or consultation calls',
        'Preparing proposals or roadmaps',
        'Delivering consultancy services',
        'Building systems and workflows',
        'Project communication',
        'Invoicing and administration',
        'Training and support delivery',
        'Improving our internal service processes',
      ],
      outro: 'We do not sell client data or use client information for unrelated marketing purposes.',
    },
    {
      title: '6. Website Forms & Communication',
      content: [
        'Information submitted through website forms may be stored securely and received through our business email systems for the purpose of responding to enquiries, preparing proposals and delivering services.',
        'By contacting us through our website or email, you consent to us communicating with you regarding your enquiry or project.',
      ],
    },
    {
      title: '7. Data Storage & Security',
      content: [
        'We take reasonable steps to store information securely and limit access to those directly involved in delivering the agreed services.',
        'This may include the use of reputable third-party platforms for communication, forms, file storage, invoicing or project management.',
        'While no digital system can guarantee absolute security, we aim to use secure and appropriate tools and good working practices.',
      ],
    },
    {
      title: '8. Access to Client Systems',
      intro: 'Where system access is provided (for example Monday.com or related platforms):',
      list: [
        'Access will be used only for agreed project purposes',
        'Activity will be limited to relevant areas of work',
        'Credentials should be shared securely',
        'Access can be removed by the client once work is complete or no longer required',
      ],
      outro: 'We recommend clients retain their own admin ownership of all systems at all times.',
    },
    {
      title: '9. Third-Party Platforms',
      content: [
        'Our services may involve third-party software platforms such as Monday.com, Google Workspace, automation tools, email platforms or file-sharing systems.',
        'Each platform operates under its own terms, privacy policies and security practices.',
        'Clients remain responsible for their own subscriptions, licences, internal permissions and platform decisions unless explicitly agreed otherwise.',
      ],
    },
    {
      title: '10. Fees & Payments',
      content: [
        'Project pricing, package fees and payment schedules are confirmed separately within proposals, invoices or acceptance forms.',
        'Invoices are payable in line with the agreed terms for each project.',
        'Work may be scheduled or commenced once any required initial payment has been received.',
      ],
    },
    {
      title: '11. Retention of Information',
      content: [
        'We retain project information only for as long as reasonably necessary for service delivery, record keeping, legal obligations or legitimate business administration.',
        'Where appropriate, information can be deleted or access removed upon request, subject to any legal or contractual obligations.',
      ],
    },
    {
      title: '12. Electronic Signatures',
      content: [
        'Where forms or agreements are signed electronically, these signatures are accepted as a valid method of confirming agreement and approval.',
      ],
    },
    {
      title: '13. Limitation of Responsibility',
      content: [
        'Our role is to provide consultancy, implementation support and recommendations.',
        'Final business decisions, internal adoption, staff usage, legal compliance and operational outcomes remain the responsibility of the client.',
        'No specific commercial result or business outcome can be guaranteed.',
      ],
    },
    {
      title: '14. Updates to This Notice',
      content: [
        'We may update this notice from time to time to reflect changes in services or working practices. The latest version will always be available on our website.',
      ],
    },
    {
      title: '15. Contact',
      content: [
        'If you have any questions regarding this notice or how information is handled, please contact us through the details provided on our website.',
      ],
    },
  ]

  return (
    <section className="pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Professional &amp; Privacy Notice</h1>
          <p className="text-slate-500 text-sm">Last updated: April 2026</p>
          <p className="text-slate-400 mt-6 leading-relaxed">
            Welcome to our consultancy services. This notice explains how we work, how we handle information, and the standards you can expect when engaging with us.
          </p>
        </div>

        <div className="fade-in-up space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-white/8 pt-8">
              <h2 className="text-white font-bold text-lg mb-4">{s.title}</h2>
              {s.content && s.content.map((p, i) => (
                <p key={i} className="text-slate-400 leading-relaxed mb-3">{p}</p>
              ))}
              {s.intro && <p className="text-slate-400 leading-relaxed mb-3">{s.intro}</p>}
              {s.intro2 && <p className="text-slate-400 leading-relaxed mb-3">{s.intro2}</p>}
              {s.list && (
                <ul className="space-y-2 mb-4 ml-1">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <svg className="shrink-0 mt-1" width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8l4 4 8-8" stroke="#8A2BE2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.outro && <p className="text-slate-400 leading-relaxed">{s.outro}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
