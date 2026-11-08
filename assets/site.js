(() => {
  const params = new URLSearchParams(window.location.search);
  for (const link of document.querySelectorAll('[data-signup-link]')) {
    const url = new URL(link.href);
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
      const value = params.get(key);
      if (value && value.length <= 100 && /^[\p{L}\p{N} _./:-]*$/u.test(value)) url.searchParams.set(key, value);
    }
    link.href = url.toString();
  }

  const code = document.querySelector('[data-direction-code]');
  const feedback = document.querySelector('[data-demo-feedback]');
  const actions = document.querySelector('[data-demo-actions]');
  const editor = document.querySelector('[data-demo-editor]');
  const input = document.querySelector('#review-direction');
  let direction = 'ask for review';
  const closeEditor = () => { editor.hidden = true; actions.hidden = false; };
  document.querySelector('[data-demo-edit]')?.addEventListener('click', () => {
    input.value = direction;
    actions.hidden = true;
    editor.hidden = false;
    input.focus();
  });
  document.querySelector('[data-demo-save]')?.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) { input.setCustomValidity('Enter a direction.'); input.reportValidity(); return; }
    input.setCustomValidity('');
    direction = value;
    code.textContent = `const nextStep = ${JSON.stringify(direction)};`;
    feedback.textContent = `Direction saved: “${direction}”`;
    closeEditor();
    document.querySelector('[data-demo-approve]').focus();
  });
  input?.addEventListener('input', () => input.setCustomValidity(''));
  document.querySelector('[data-demo-cancel]')?.addEventListener('click', closeEditor);
  document.querySelector('[data-demo-approve]')?.addEventListener('click', () => {
    feedback.textContent = `Approved with direction: “${direction}”.`;
  });
})();
