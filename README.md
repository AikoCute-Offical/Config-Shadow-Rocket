Bài viết dưới đây hướng dẫn cách chặn quảng cáo trong ứng dụng trên hệ điều hành iOS bằng Shadowrocket

# Giới thiệu

Tải ứng dụng: https://itunes.apple.com/app/shadowrocket/id932747118?mt=8

![](https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/84/3d/7f/843d7f23-fdd5-97c2-d7c4-5981ba9542fd/mzl.syhpxhsl.png/300x0w.jpg) ![](https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/04/f0/cb/04f0cb89-e5f4-da3b-a818-90bbfed5e2f4/mzl.uairddum.png/300x0w.jpg)

Lưu ý:
* Đây là ứng dụng trả phí, bạn sẽ phải tốn `69.000 VND` để tải ứng dụng. Thực tế ứng dụng này là tool để phân tích khi truy cập web, nhưng được tận dụng để trở thành công cụ chặn quảng cáo.
* Tính năng lọc `HTTPS` phân giải tên miền sử dụng giao thức https.
* VPN sẽ tự động bật sau mỗi lần khởi động lại thiết bị, bạn không cần phải vào ứng dụng bật thủ công trở lại.

## Chuẩn bị

Trước khi bắt đầu cài đặt, bạn cần phải thực hiện **Opt-out** để giới hạn quảng cáo trên thiết bị của bạn. Thực hiện theo bài viết [hướng dẫn Opt-out này.](https://github.com/AikoCute/Config-Shadow-Rocket/wiki)

## Thêm cấu hình

Bước 1: Sau khi tải Shadowrocket, tại màn hình chính chọn tab `Config` sau đó chọn `Add Configuration`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B01.jpg)

Bước 2: Dán đường dẫn cấu hình https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/aiko.conf vào popup `Download config from url...` hiện lên, sau đó nhấn `Download` để ứng dụng thêm tập tin cấu hình

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B02.jpg)

Bước 3: Sau khi đã thêm thành công, chọn dòng cấu hình đã thêm

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B03.jpg)

Bước 4: Chọn `Use config`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B04.jpg)

Và đợi ứng dụng tải tập tin cấu hình

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B04-1.png)

## Cài đặt chứng chỉ

Bước 5: Chọn `aiko.conf`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B05.jpg)

Bước 6: Chọn `Edit Config`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B06.jpg)

Bước 7: Chọn `HTTPS Decryption`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B07.jpg)

Bước 8: Nhấn `i` như hình

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B08.jpg)

Bước 9: Chọn `Install CA Certificate to System`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B09.jpg)

Bước 10: Nhấn Allow (Cho phép) để bắt đầu cài đặt chứng chỉ

* Lưu ý: Kể từ iOS 12.2, bạn phải vào `Setting` của iOS mới tiếp tục cài đặt chứng chỉ do iOS không tự động chuyển qua như iOS trước

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B10.jpg)

Chọn `Install` (`Cài đặt`) và làm theo hướng dẫn của iOS để tiến hành cài đặt chứng chỉ

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B10-1.jpg)

Bước 11: Vào `Setting > General > About > Certificate Trust Settings` (`Cài đặt > Cài đặt chung > Thông tin > Certificate Trust Settings`). Bật tin cậy chứng chỉ `Shadowrocket ***`. Chọn `Continue` (`Tiếp tục`)

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B11.jpg)

Bước 12: Trở về ứng dụng, kiểm tra nếu hiển thị `Trust by system` là đã hoàn tất việc cài đặt chứng chỉ. Nhấn lưu (góc phải) để tiếp tục

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B12.jpg)

Bước 13: Nhấn lưu (góc phải) lần nữa để tiếp tục

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B13.jpg)

## Tính năng On Demand

Bước 14: Truy cập thẻ `Setings` chọn dòng `On Demand`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B14.jpg)

Bước 15: Bật dòng `On Demand` như hình

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B15.jpg)

Nhấn `Allow` (`Cho phép`)

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B16.jpg)

Làm theo hướng dẫn để tiến hành cài đặt VPN

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B16-1.png)

Bước 17: Kiểm tra tại mục `On Demand` đã bật như hình là đã bật thành công

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B17.jpg)

Bước 18: Chuyển sang thẻ `Home` kiểm tra ứng dụng hiện `Connected` là đã thành công

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B18.jpg)

_**Lưu ý**_, ứng dụng không tích hợp sẵn bộ lọc để chặn quảng cáo trên Safari. Do đó hãy thực hiện theo bài viết [hướng dẫn này](https://github.com/bigdargon/hostsVN/wiki/Adguard) để lướt web không bị làm phiền bởi quảng cáo.

## Cập nhật cấu hình

> Ứng dụng Shadowrocket không tự động cập nhật tập tin cấu hình, kể cả bạn có bật tính năng chạy nền của iOS. Do đó, bắt buộc bạn phải cập nhật thủ công tập tin cấu hình.

Bước 19: Chọn `hostsVN-shadowrocket.conf`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B19.jpg)

Bước 20: Chọn `Update Config`

![](https://raw.githubusercontent.com/AikoCute/Config-Shadow-Rocket/aiko/image/img_Shadowrocket_B20.jpg)

## Báo lỗi

> Trong quá trình sử dụng, trong danh sách tên miền chặn có thể dẫn đến lỗi khi sử dụng một số phần mềm khác. Theo các bước sau để bật nhật ký chặn của ứng dụng để báo lỗi tại đây [![](https://img.shields.io/badge/MyTele-@AikocuteTele-blue.svg)](https://t.me/AikoCute_Player)

Bước 21: Chuyển sang tab `Data` tại mục `LOGGING` chọn `Proxy`. Bật tại tùy chọn `Enable logging`

Bước 22: Kế tiếp trở lại ứng dụng muốn báo lỗi, thực hiện thao tác và chụp ảnh màn hình lỗi để đính kèm khi báo lỗi. Sau đó trở về ứng dụng Shadowrocket, chọn log mà ứng dụng vừa tạo ra, chọn tab `REJECT` và chụp màn hình tại tab này để đính kèm báo lỗi

Bước 23: Đến địa chỉ [![](https://img.shields.io/badge/MyTele-@AikocuteTele-blue.svg)](https://t.me/AikoCute_Player) để tiến hành báo lỗi, bạn ghi càng chi tiết càng tốt để quá trình xử lý lỗi được nhanh hơn!
