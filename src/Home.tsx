import "./assets/style.css"
const Home = () => {
  return (
    <main className="container" >
      <header className="header" >
        <a href="#"> <img src="/public/images/Logo-2.svg" width={190} height={100} alt="logo" /></a>
        <div className="btn1" >
          <button><img src="/public/images/facebook.svg" alt="" /></button>
          <button><img src="/public/images/in.svg" alt="" /></button>
          <button><img src="/public/images/instagram.svg" alt="" /></button>

        </div>
      </header>
      <div className="content" >
        <div className="content-section" >
          <div className="content-section--title" >
            <h1>Người bạn</h1>
            <h1>cùng con</h1>
            <h1 className="text1" >trưởng thành</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button><img src="/public/images/Button.svg" alt="" /></button>
          </div>
          <div className="content-section--img" >
            <img src="/public/images/anh1.svg" alt="" />
          </div>

        </div>
        <div className="download" >
          <button><img src="/public/images/appstore.svg" alt="" /></button>
          <button><img src="/public/images/ggplay.svg" alt="" /></button>
        </div>
        <div className="contact" >
          <h1 className="text2" >Cầu nối giữa</h1>
          <h1 className="text3" >nhà trường - giáo viên -phụ huynh</h1>
          <div className="card" >
            <div className="card1" >
              <div className="card1-img" ><img src="/public/images/baiviet1.svg" alt="" /></div>
              <div className="card1-title" >
                <h1>Hệ thống quản lý chuyên nghiệp</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className="card1" >
              <div className="card1-img" ><img src="/public/images/baiviet2.svg" alt="" /></div>
              <div className="card1-title" >
                <h1>Tương tác trao đổi thông tin thuận tiện</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className="card1" >
              <div className="card1-img" ><img src="/public/images/suckhoe.svg" alt="" /></div>
              <div className="card1-title" >
                <h1>Cập nhật hoạt động của bé nhanh chóng</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
            <div className="card1" >
              <div className="card1-img" ><img src="/public/images/money.svg" alt="" /></div>
              <div className="card1-title" >
                <h1>Thống kê, quản lý học phí Chi tiết</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content" >
          <div className="content-section" >
            <div className="content-section--img" >
              <img src="/public/images/content2.svg" alt="" />
            </div>
            <div className="content-section-title" >
              <img src="/public/images/Logo-2.svg" alt="" width={130} />
              <h1>Giải pháp toàn diện</h1>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <button><img src="/public/images/Button.svg" alt="" /></button>
            </div>
          </div>
        </div>
        <div className="contact" >
          <h1 className="text2" >Cầu nối giữa</h1>
          <h1 className="text3" >nhà trường - giáo viên -phụ huynh</h1>
          <div className="card" >

            <div className="card1" >
              <div className="card2-img" ><img src="/public/images/parent1.svg" width={300} height={250} alt="" /></div>
              <div className="card1-title" >
                <h1>Nhà trường<button className="white" ><img src="/public/images/white.svg" alt="" /></button></h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="card1" >
              <div className="card2-img" ><img src="/public/images/anh2.svg" width={300} height={250} alt="" /></div>
              <div className="card1-title" >
                <h1>Giáo viên<button className="white" ><img src="/public/images/white.svg" alt="" /></button></h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="card1" >
              <div className="card2-img" ><img src="/public/images/parent1.svg" width={300} height={250} alt="" /></div>
              <div className="card1-title" >
                <h1>Phụ huynh<button className="white" ><img src="/public/images/white.svg" alt="" /></button></h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>

          </div>
        </div>
        <div className="contact" >
          <h1 className="feed-back" >Khách hàng của chúng tôi</h1>
          <img className="banner" src="/public/images/banner.svg" alt="" width={1000} />
          <img className="anhkh" src="/public/images/111.svg" alt="" width={250} />
        </div>
        <div className="content" >
          <div className="content-section" >
            <div className="content-section-title1" >
              <h1>Đăng kí trải nghiệm</h1>
              <br />
              <img className="pic-signin" src="/public/images/Logo-2.svg" alt="" width={130} />
              <form className="form-control" >
                <input type="text" className="form-control" placeholder="Họ tên" />
                <br />
                <input type="text" className="form-control" placeholder="Số điện thoại" />
                <br />
                <input type="text" className="form-control" placeholder="Email" />
                <br />
                <input type="text" className="form-control" placeholder="Tên trường" />
                <br />
                <input type="text" className="form-control" placeholder="Ghi chú" />
              </form>
            </div>
            <div className="content-section--img" >
              <img src="/public/images/phone.svg" alt="" height={500} />
            </div>
          </div>
        </div>
        <div className="contact" >
        <img  src="/public/images/footer.svg" alt="" width={900} />
        </div>


      </div>
    </main>
  )
}

export default Home
