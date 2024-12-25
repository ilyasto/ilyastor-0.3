function showContent(section) {
  const content = document.getElementById('content');
  if (section === 'study') {
    content.innerHTML = `
      <h2>قسم الدراسة</h2>
      <p>هنا يمكنك استعراض الدروس المتعلقة بالمقاربة الوظيفية.</p>
      <ul>
        <li>الحاجة للمناظم الآلية</li>
        <li>تحليل الحاجة للحاجز الآلي</li>
        <li>دراسة الجدوى للحاجز الآلي</li>
        <li>الدوال المنطقية الأساسية</li>
      </ul>
    `;
  } else if (section === 'chat') {
    content.innerHTML = `
      <h2>قسم الدردشة</h2>
      <p>هنا يمكنك بدء محادثة مع الذكاء الاصطناعي للحصول على المساعدة.</p>
    `;
  } else if (section === 'exams') {
    content.innerHTML = `
      <h2>قسم الامتحانات</h2>
      <p>هنا يمكنك تجربة امتحانات لاختبار معلوماتك.</p>
    `;
  }
}

