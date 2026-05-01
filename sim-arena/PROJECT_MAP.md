**Đây là bản đồ cấu trúc động. Trong các phiên làm việc tiếp theo, nếu bạn (AI) đề xuất hoặc trực tiếp thực hiện bất kỳ thay đổi nào làm ảnh hưởng đến cấu trúc này (như tạo mới, đổi tên, di chuyển, hoặc xóa file/thư mục), BẠN BẮT BUỘC PHẢI CHỦ ĐỘNG CẬP NHẬT LẠI file PROJECT_MAP.md này ngay trong cùng lượt phản hồi đó để bản đồ luôn chính xác 100% với thực tế.**

# PROJECT MAP

```text
sim-arena/
├─ PROJECT_OVERVIEW.md - Bản tóm tắt mục tiêu, luồng chính và công nghệ lõi của dự án.
├─ PROJECT_MAP.md - Bản đồ cấu trúc động của toàn bộ codebase.
├─ backend/ - Dịch vụ FastAPI xử lý AI, upload asset và lưu dữ liệu SQLite.
│  ├─ package.json - Khai báo dependency runtime của backend Python package shim.
│  └─ app/
│     ├─ main.py - Entry point FastAPI, cấu hình CORS, static files và router.
│     ├─ api/ - Nhóm route HTTP cho AI và upload asset.
│     │  ├─ routes_ai.py - Endpoint sinh timeline chiến đấu bằng Gemini.
│     │  └─ routes_assets.py - Endpoint upload map/shape và ghi metadata vào DB.
│     ├─ core/ - Cấu hình và prompt hệ thống cho AI.
│     │  ├─ ai_prompts.py - System prompt mô tả luật tạo timeline cho battle director.
│     │  └─ config.py - Nơi lấy/cố định cấu hình nhạy cảm như Gemini API key.
│     ├─ db/ - Lớp truy cập SQLite và schema khởi tạo.
│     │  ├─ database.py - Khởi tạo kết nối DB và chạy schema khi server start.
│     │  └─ schemas.sql - Định nghĩa bảng uploaded_assets và map_configs.
│     └─ uploads/ - Thư mục phục vụ asset đã tải lên qua StaticFiles.
│        ├─ maps/ - Ảnh bản đồ được lưu ở đây khi người dùng upload.
│        └─ shapes/ - Ảnh khối hình/nhân vật được lưu ở đây khi người dùng upload.
└─ frontend/ - Ứng dụng React/Vite điều khiển studio, board, AI panel và mô phỏng.
   ├─ package.json - Dependency, script build/dev/lint của frontend.
   ├─ README.md - Tài liệu khởi động và hướng dẫn frontend.
   ├─ eslint.config.js - Cấu hình lint TypeScript/React.
   ├─ index.html - HTML shell của ứng dụng Vite.
   ├─ tsconfig.json - Cấu hình TypeScript gốc.
   ├─ tsconfig.app.json - Cấu hình TypeScript cho mã ứng dụng.
   ├─ tsconfig.node.json - Cấu hình TypeScript cho file chạy trong Node/Vite.
   ├─ vite.config.ts - Cấu hình build/dev server cho Vite.
   ├─ public/ - Tài nguyên tĩnh được phục vụ nguyên trạng.
   └─ src/ - Toàn bộ mã nguồn giao diện và state của ứng dụng.
      ├─ main.tsx - Điểm khởi động React, mount App vào #root.
      ├─ App.tsx - Điều phối stage màn hình chính giữa studio và battle.
      ├─ App.css - CSS bổ sung cho phần giao diện mẫu/khởi tạo.
      ├─ index.css - Nạp Tailwind và style nền tảng toàn cục.
      ├─ assets/ - Tài nguyên ảnh/icon cục bộ nếu có.
      ├─ store/ - Global state bằng Zustand.
      │  └─ useMainStore.ts - Nguồn trạng thái trung tâm cho map, team, timeline, VFX và actions.
      └─ components/ - Các khối UI theo từng luồng chức năng.
         ├─ QuickTester.tsx - Nút inject dữ liệu mẫu nhanh để test toàn bộ flow.
         ├─ layout/ - Bố cục tổng thể của từng màn hình.
         │  └─ MainDashboard.tsx - Studio 3 cột cho team A, khu trung tâm và team B.
         ├─ center/ - Các điều khiển ở khu trung tâm studio.
         │  ├─ AssetUploader.tsx - Upload khối hình đại diện cho nhân vật.
         │  ├─ MapUploader.tsx - Upload bản đồ và mô tả hiệu ứng map.
         │  └─ StartButton.tsx - Gửi asset lên backend và chuyển sang stage dựng board.
         ├─ teams/ - Quản lý đội hình hai bên và modal nhân vật.
         │  ├─ TeamAColumn.tsx - Danh sách, thêm/sửa/xóa nhân vật đội A.
         │  ├─ TeamBColumn.tsx - Danh sách, thêm/sửa/xóa nhân vật đội B.
         │  └─ CharacterModal.tsx - Form tạo/cập nhật nhân vật và chọn shape.
         └─ battle/ - Giao diện sa bàn và các panel theo stage battle.
            ├─ BattleLayout.tsx - Khung battle tổng, gắn DnD và đổi panel theo appStage.
            ├─ ArenaBoard.tsx - Bàn cờ 20x20 hiển thị map nền và vùng thả quân.
            ├─ DroppableCell.tsx - Một ô lưới nhận thả, hiển thị unit, HP, dialogue và VFX.
            ├─ DraggableCharacter.tsx - Thẻ nhân vật kéo được từ panel quản lý.
            ├─ ManagementPanel.tsx - Quản lý deploy quân, copy/ghép JSON timeline và kích hoạt AI.
            ├─ AIPanel.tsx - Gọi backend tạo timeline 15 giây tiếp theo bằng Gemini.
            ├─ SimulationPanel.tsx - Phát timeline, áp dụng damage/move/dialogue/VFX theo thời gian.
            └─ ExportPanel.tsx - Mô phỏng bước xuất video và cho phép reset trận mới.
```
