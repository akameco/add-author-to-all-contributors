document.addEventListener("DOMContentLoaded", () => {
  const $ = document.querySelector.bind(document);
  const button = `
    <div class="discussion-sidebar-item">
      <button class="btn btn-sm btn-block mt-2 all-contributor" type="button">
          Add contributor
      </button> 
    </div>
  `;
  const sidebarEl = $("#partial-discussion-sidebar");
  sidebarEl.insertAdjacentHTML("beforeend", button);
  const buttonEl = sidebarEl.querySelector(".all-contributor");
  buttonEl.addEventListener(
    "click",
    () => {
      const fieldEl = $("#new_comment_field");
      const prAuthor = $('[data-hovercard-type="user"] .avatar').getAttribute(
        "alt"
      );
      fieldEl.value = `@all-contributors please add ${prAuthor} for code, test, doc, infra`;
    },
    false
  );
});
