const demoButton = document.querySelector("#run-demo");
const chatBody = document.querySelector("#chat-body");

const sample = {
  request: "Hãy tóm tắt video mẫu và chỉ ra các ý nổi bật. Chưa xuất bản.",
  answer: `
    <div class="chat-agent-head">BẢN NHÁP MÔ PHỎNG · NGUỒN HƯ CẤU</div>
    <strong>Tóm tắt</strong>
    <p>Một nhóm thiết kế đang thử nghiệm biến bã cà phê thành vật liệu đóng gói. Đoạn mẫu nhấn mạnh ba điểm: nguồn nguyên liệu địa phương, thử nghiệm độ bền và nhu cầu đánh giá vòng đời sản phẩm.</p>
    <strong>Ý nổi bật</strong>
    <ul>
      <li><b>00:42</b> — Nhóm thu gom bã cà phê từ các quán trong khu vực.</li>
      <li><b>01:36</b> — Mẫu vật liệu đầu tiên được thử với độ ẩm cao.</li>
      <li><b>03:10</b> — Người trình bày nói cần kiểm tra khả năng phân hủy trước khi ứng dụng.</li>
    </ul>
    <span class="chat-source">Nguồn: video giả lập · timestamp chỉ để minh họa</span>
    <div class="chat-note">Chưa tạo tài liệu Feishu. Cần người dùng duyệt bản tóm tắt trước.</div>
  `
};

demoButton?.addEventListener("click", () => {
  const emptyState = document.querySelector("#empty-state");
  emptyState?.remove();

  const userMessage = document.createElement("div");
  userMessage.className = "chat-user";
  userMessage.textContent = sample.request;

  const agentMessage = document.createElement("div");
  agentMessage.className = "chat-agent";
  agentMessage.innerHTML = sample.answer;

  chatBody.replaceChildren(userMessage, agentMessage);
  demoButton.disabled = true;
  demoButton.innerHTML = 'Đã phát demo <span aria-hidden="true">✓</span>';
  demoButton.setAttribute("aria-label", "Demo mô phỏng đã được phát");
});
