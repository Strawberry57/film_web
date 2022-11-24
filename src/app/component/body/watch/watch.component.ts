import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  title : string = "Lời mời đến từ địa ngục";
  src : string ="../../../../assets/images/maxresdefault.jpg";
  status : string ="Tập 1 | Vietsub"
  subTitle : string = "The Invitation From Hell (2022)"
  description: string = "là câu chuyện sau khi mẹ qua đời, Evie không còn bất kỳ người thân nào trên đời. Cô quyết định làm xét nghiệm ADN và phát hiện ra mình còn một người em họ đã thất lạc từ lâu. Nhờ vậy mà Evie được gia đình người này mời đến dự một đám cưới xa hoa ở vùng nông thôn nước Anh. Ban đầu, cô có cảm tình với một chàng quý tộc điển trai nhưng nhanh chóng bị đẩy vào cơn ác mộng khi khám phá ra những bí mật đen tối trong lịch sử gia đình mình và âm mưu kinh hoàng đằng sau sự xa hoa của họ"
  constructor() { }

  ngOnInit(): void {
  }

}
