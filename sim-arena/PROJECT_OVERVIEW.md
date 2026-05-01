# PROJECT OVERVIEW

SimArena là một ứng dụng mô phỏng trận chiến theo kịch bản, nơi người dùng chuẩn bị bản đồ, khối hình đại diện và đội hình nhân vật, sau đó dùng AI để tạo timeline diễn biến rồi chạy mô phỏng theo từng mốc thời gian. Mục tiêu của dự án là biến dữ liệu chiến đấu rời rạc thành một quy trình dựng cảnh, điều phối hành động và xuất kết quả theo kiểu “battle director” có thể kiểm soát được.

Luồng chính của ứng dụng gồm 3 bước lớn: chuẩn bị studio ở frontend để tải map và shape, sắp xếp nhân vật lên bàn cờ 20x20; yêu cầu backend gọi Gemini để sinh timeline 15 giây tiếp theo dựa trên trạng thái hiện tại; và phát lại timeline đó trong chế độ mô phỏng, hiển thị log, hội thoại, hiệu ứng, sát thương, rồi đi tới bước xuất video mô phỏng.

Frontend được xây bằng React 19 + TypeScript + Vite, dùng Tailwind CSS 4 cho giao diện, Zustand cho state toàn cục, và dnd-kit cho kéo thả quân cờ. Backend là FastAPI, dùng Pydantic cho schema request, CORS để kết nối với frontend, StaticFiles để phục vụ asset upload, và google.generativeai để gọi Gemini. Dữ liệu bền vững được lưu bằng SQLite qua aiosqlite, chủ yếu cho map configs và uploaded assets.
