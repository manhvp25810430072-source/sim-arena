SimArena là một ứng dụng mô phỏng trận chiến theo kịch bản, nơi người dùng chuẩn bị bản đồ, khối hình đại diện và đội hình nhân vật, sau đó dùng AI để tạo timeline diễn biến rồi chạy mô phỏng theo từng mốc thời gian. Mục tiêu của dự án là biến dữ liệu chiến đấu rời rạc thành một quy trình dựng cảnh, điều phối hành động và xuất kết quả theo kiểu “battle director” có thể kiểm soát được.

Luồng chính của ứng dụng gồm 3 bước lớn: chuẩn bị studio ở frontend để tải map và shape, sắp xếp nhân vật lên bàn cờ 20x20; yêu cầu backend gọi Gemini để sinh timeline 15 giây tiếp theo dựa trên trạng thái hiện tại; và phát lại timeline đó trong chế độ mô phỏng, hiển thị log, hội thoại, hiệu ứng, sát thương, rồi đi tới bước xuất video mô phỏng.

Frontend được xây bằng React 19 + TypeScript + Vite, dùng Tailwind CSS 4 cho giao diện, Zustand cho state toàn cục, dnd-kit cho kéo thả quân cờ, **và bộ công cụ PixiJS + GSAP để xử lý kỹ xảo đồ họa đa lớp (VFX) cùng chuyển động vật lý mượt mà**. Backend là FastAPI, dùng Pydantic cho schema request, CORS để kết nối với frontend, StaticFiles để phục vụ asset upload, và google.generativeai để gọi Gemini. Dữ liệu bền vững được lưu bằng SQLite qua aiosqlite, chủ yếu cho map configs và uploaded assets.

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

│     │  ├─ ai_prompts.py - System prompt quy định luật sinh timeline và 10 công cụ VFX (Pixi/GSAP) cho battle director.

│     │  └─ config.py - Nơi lấy/cố định cấu hình nhạy cảm như Gemini API key.

│     ├─ db/ - Lớp truy cập SQLite và schema khởi tạo.

│     │  ├─ database.py - Khởi tạo kết nối DB và chạy schema khi server start.

│     │  └─ schemas.sql - Định nghĩa bảng uploaded_assets và map_configs.

│     └─ uploads/ - Thư mục phục vụ asset đã tải lên qua StaticFiles.

│        ├─ maps/ - Ảnh bản đồ được lưu ở đây khi người dùng upload.

│        └─ shapes/ - Ảnh khối hình/nhân vật được lưu ở đây khi người dùng upload.

└─ frontend/ - Ứng dụng React/Vite điều khiển studio, board, AI panel, VFX và mô phỏng.

   ├─ package.json - Dependency, script build/dev/lint của frontend (đã bổ sung pixi.js, gsap).

   ├─ README.md - Tài liệu khởi động và hướng dẫn frontend.

   ├─ eslint.config.js - Cấu hình lint TypeScript/React.

   ├─ index.html - HTML shell của ứng dụng Vite.

   ├─ tsconfig.json - Cấu hình TypeScript gốc.

   ├─ tsconfig.app.json - Cấu hình TypeScript cho mã ứng dụng.

   ├─ tsconfig.node.json - Cấu hình TypeScript cho file chạy trong Node/Vite.

   ├─ vite.config.ts - Cấu hình build/dev server cho Vite.

   ├─ public/ - Tài nguyên tĩnh được phục vụ nguyên trạng.

   └─ src/ - Toàn bộ mã nguồn giao diện, state và logic của ứng dụng.

      ├─ main.tsx - Điểm khởi động React, mount App vào #root.

      ├─ App.tsx - Điều phối stage màn hình chính giữa studio và battle.

      ├─ App.css - CSS bổ sung cho phần giao diện mẫu/khởi tạo.

      ├─ index.css - Nạp Tailwind và style nền tảng toàn cục.

      ├─ assets/ - Tài nguyên ảnh/icon cục bộ nếu có.

      ├─ store/ - Global state bằng Zustand.

      │  └─ useMainStore.ts - Nguồn trạng thái trung tâm cho map, team, timeline, mảng VFX và actions.

      ├─ utils/ - Chứa các công cụ tiện ích độc lập với UI.

      │  └─ vfxEngine.ts - Động cơ kỹ xảo thông dịch JSON của AI thành hình ảnh PixiJS và chuyển động GSAP.

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

            ├─ ArenaBoard.tsx - Bàn cờ 20x20 chứa các lớp Canvas (Bg/Fg) và quản lý thẻ nhân vật cho GSAP.

            ├─ DroppableCell.tsx - Lưới vô hình chỉ làm nhiệm vụ nhận sự kiện thả quân (DnD drop zone).

            ├─ DraggableCharacter.tsx - Thẻ nhân vật kéo được từ panel quản lý.

            ├─ ManagementPanel.tsx - Quản lý deploy quân, copy/ghép JSON timeline và kích hoạt AI.

            ├─ AIPanel.tsx - Gọi backend tạo timeline 15 giây tiếp theo bằng Gemini.

            ├─ SimulationPanel.tsx - Phát timeline, gọi vfxEngine và điều phối UI theo thời gian thực.

            └─ ExportPanel.tsx - Mô phỏng bước xuất video và cho phép reset trận mới.



```