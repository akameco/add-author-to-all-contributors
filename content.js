document.addEventListener("DOMContentLoaded", () => {
  const $ = document.querySelector.bind(document);
  const button = `
    <div class="discussion-sidebar-item">
      <button id="all-contributor" class="btn btn-sm btn-block mt-2" type="button">
          Add contributor
      </button> 
    </div>
  `;
  $("#partial-discussion-sidebar").insertAdjacentHTML("beforeend", button);
  $("#all-contributor").addEventListener(
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
