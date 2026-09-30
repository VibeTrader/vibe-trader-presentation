from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from reportlab.lib.units import mm

ROOT=Path(__file__).parent
for name,file in [('Regular','Arial.ttf'),('Bold','Arial Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name,'/System/Library/Fonts/Supplemental/'+file))
W,H=148*mm,210*mm
c=canvas.Canvas(str(ROOT/'falcon-two-sided-proof.pdf'),pagesize=(W,H))
c.setTitle('Falcon | Two-sided A5 flyer | Image proof')
c.setAuthor('Vibe Trader')
navy='#081820';white='#F7F5EF';gold='#D5B377';muted='#B3C0C4';M=30
def text(x,top,s,size=10,font='Regular',color=white):
    c.setFillColor(HexColor(color));c.setFont(font,size);c.drawString(x,H-top,s)
def line(top):
    c.setStrokeColor(HexColor('#425057'));c.setLineWidth(.5);c.line(M,H-top,W-M,H-top)
def bg():
    c.setFillColor(HexColor(navy));c.rect(0,0,W,H,fill=1,stroke=0)
bg()
# Place the complete supplied stock proof without retouching or removing marks.
image_h=W*1690/1600
c.drawImage('/Users/nithyakumarangnanasekar/Desktop/majestic-falcon-focus-outstretched-wings-captivating-close-up-majestic-falcon-showcasing-vibrant-colors-intricate-374244186.jpg',0,H-image_h,W,image_h)
text(M,506,'FALCON',53,'Bold')
text(M,537,'AI-powered gold trading.',21,'Regular',white)
text(M,575,'VIBE TRADER',9,'Bold',gold)
c.showPage()
bg()
text(M,34,'VIBE TRADER',10,'Bold',gold)
text(277,34,'FOREX EXPO / DUBAI',7.2,'Bold',muted)
text(M,78,'FALCON',32,'Bold')
text(M,104,'AI-powered gold trading.',18,'Regular',gold)
text(M,135,'An automated gold breakout strategy for XAU/USD.',10.5)
text(M,152,'Available on MetaTrader 4 and MetaTrader 5.',10.5)
line(171)
text(M,194,'THE STRATEGY',8,'Bold',gold)
for y,num,title,body in [
    (217,'01','Watch the range','Monitors established price ranges on gold.'),
    (256,'02','Trade the breakout','Places trades when its breakout rules are met.'),
    (295,'03','Apply the rules','Executes consistently without manual order entry.')]:
    text(M,y,num,11,'Regular',gold)
    text(M+28,y,title,11,'Bold')
    text(M+28,y+15,body,9,'Regular',muted)
line(326)
text(M,348,'REPORTED ACCOUNT RESULTS',8,'Bold',gold)
for x,val,label in [(M,'716','Trades'),(119,'~77%','Win rate'),(208,'2.72','Profit factor'),(297,'24.77%','Max. drawdown')]:
    text(x,376,val,20,'Bold');text(x,392,label,8,'Regular',muted)
text(M,412,'Jan-Jul 2026 | Real USD account | VT Markets | MT4 | 1:500 leverage',7.3,'Regular',muted)
text(M,425,'Reported on the Falcon strategy page. Results vary by broker and leverage.',7.3,'Regular',muted)
line(442)
text(M,467,'Meet us at Forex Expo Dubai',13,'Bold')
text(M,486,'Scan to explore Falcon and view plans.',9,'Regular',muted)
text(M,507,'vibetrader.com/strategies/falcon',9,'Bold',gold)
url='https://www.vibetrader.com/strategies/falcon'
q=QrCodeWidget(url,barLevel='M');x0,y0,x1,y1=q.getBounds();size=65
d=Drawing(size,size,transform=[size/(x1-x0),0,0,size/(y1-y0),0,0]);d.add(q)
c.setFillColor(HexColor('#FFFFFF'));c.rect(W-M-size-2,H-523,size+4,size+4,fill=1,stroke=0)
renderPDF.draw(d,c,W-M-size,H-521)
c.linkURL(url,(M,H-525,W-M,H-448),relative=0)
text(M,549,'Trading leveraged gold carries a high risk of losing money.',7.5,'Regular',muted)
text(M,562,'No trading system guarantees profits. Past performance is not',7.5,'Regular',muted)
text(M,575,'indicative of future performance.',7.5,'Regular',muted)
c.showPage();c.save()
print(ROOT/'falcon-two-sided-proof.pdf')
