import React from 'react'

export default function Registration() {
    return (
        <div>
          <h1><b>Daftar</b></h1>
          <p>Ini cepat dan mudah.</p>
          <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="email" class="form-control" id="inputEmail4" placeholder="Nama Depan"></input>
    </div>
    <div class="form-group col-md-6">
      <input type="password" class="form-control" id="inputPassword4" placeholder="Nama Belakang"></input>
    </div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputAddress" placeholder="Nomor Seluler atau E-mail"></input>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputAddress2" placeholder="Kata sandi baru"></input>
  </div>
  <p>Tanggal lahir</p>
  <div class="form-row">
    <div class="form-group col-md-3">
    <select id="inputState" class="form-control">
        <option selected>Tanggal</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-3">
      <select id="inputState" class="form-control">
        <option selected>Bulan</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-3">
      <select id="inputState" class="form-control">
        <option selected>Tahun</option>
        <option>...</option> 
      </select>
    </div>
    <div class="form-group col-md-1"><h6><span class="badge badge-pill badge-secondary">?</span></h6>
    <p></p>
    </div>
  </div>
  <p>Jenis Kelamin</p>
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
    <label class="form-check-label" for="inlineRadio1">Perempuan</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
    <label class="form-check-label" for="inlineRadio2">Laki-laki</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
    <label class="form-check-label" for="inlineRadio3">Khusus</label>
    
  </div>
      <p className="pRegistration">Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan Data dan Kebijakan Cookie kami. Anda akan menerima Notifikasi SMS dari Facebook dan dapat menolaknya kapan saja.</p>
    <button type="submit" className="btn btn-success daftarButton"><b>Daftar</b></button>
    </form>
      <p className="pRegistration">Buat Halaman untuk selebriti, grup musik, atau bisnis.</p>
        </div>
    )
}
