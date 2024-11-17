# maliyetmetre - utilitycalculator

Kullanıcıların tüketim parametrelerini girerek günlük, aylık ve yıllık tüketimlerini ve maliyetlerini hesaplayan basit bir web tabanlı araç

## Özellikler

- **Elektrik Tüketim Hesaplayıcı**: Kullanıcılar, güç tüketimi, cihaz sayısı, günlük kullanım saatleri ve aylık çalışma günleri gibi değerleri girerek toplam tüketim ve maliyeti hesaplayabilirler.
- **Doğalgaz Tüketim Hesaplayıcı**: Kullanıcılar, doğalgaz tüketim miktarını, günlük saatlik tüketim ve aylık kullanım günlerini belirleyerek maliyet hesaplayabilirler.
- **Su Tüketim Hesaplayıcı**: Kullanıcılar, su tüketim değerlerini girerek maliyetlerini görüntüleyebilir.
- **Pasta Grafik Görselleştirme**: Elektrik, doğalgaz ve su için tüketim bileşenlerini gösteren Recharts tabanlı pasta grafikleri sunar.

## Kullanılan Teknolojiler

- ReactJS
- React Hook'lar (`useState`, `useEffect`)
- UI Bileşenleri (Card ve Tabs)
- Recharts (Grafik ve veri görselleştirme)
- Özel Bileşenler (`Card`, `Tabs`, `TabsContent`, vb.)

## Kurulum ve Kullanım

### Gereksinimler

- Node.js ve npm/yarn yüklü olmalıdır.

### Kurulum Adımları

1. Projeyi klonlayın veya indirin:
   ```bash
   git clone <repository-url>
   ```
2. Proje dizinine gidin:
   ```bash
   cd utility-calculator
   ```
3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
   veya
   ```bash
   yarn install
   ```
4. Uygulamayı başlatın:
   ```bash
   npm start
   ```
   veya
   ```bash
   yarn start
   ```

Uygulama, yerel sunucunuzda başlatılacak ve `http://localhost:3000` adresinde çalışacaktır.

## Kullanım Talimatları

- Elektrik, doğalgaz ve su tüketim bilgilerinizi girin.
- Girdiğiniz değerlere göre, günlük, aylık ve yıllık maliyet hesaplamalarını anında görebilirsiniz.
- Pasta grafikleri ile tüketiminizin bileşenlerini detaylı şekilde görüntüleyin.

## Özelleştirme

- **Fiyatlandırma Oranları**: `electricity`, `naturalGas` ve `water` state'lerinde bulunan varsayılan oranları (`rate` değerleri) ihtiyacınıza göre değiştirebilirsiniz.
- **Grafik Görselleştirme**: Recharts bileşenlerini kullanarak grafiklerinizi özelleştirebilir veya yeni bileşenler ekleyebilirsiniz.

## Gelecek İyileştirmeler

- Kullanıcı dostu bir sonuç raporu özelliği eklenmesi.
- Farklı enerji kaynaklarına yönelik hesaplama araçlarının genişletilmesi.
- Grafik ve görselleştirmelerin daha detaylı hale getirilmesi.

## Lisans

Bu proje açık kaynaklıdır ve [MIT Lisansı](LICENSE) ile lisanslanmıştır. 
