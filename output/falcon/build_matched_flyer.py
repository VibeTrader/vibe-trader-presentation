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
c=canvas.Canvas(str(ROOT/'falcon-flyer-matched.pdf'),pagesize=(W,H))
c.setTitle('Falcon | Two-page flyer');c.setAuthor('Vibe Trader')
navy='#101E2B';ivory='#F6F1E6';blue='#E0AC58';gold='#E0AC58';muted='#B8C6D2';M=28
def text(x,y,s,size=10,font='Regular',color=ivory):
    c.setFillColor(HexColor(color));c.setFont(font,size);c.drawString(x,H-y,s)
def rect(x,y,w,h,color):
    c.setFillColor(HexColor(color));c.rect(x,H-y-h,w,h,fill=1,stroke=0)
def rule(x,y,w,color='#34495D'):
    c.setStrokeColor(HexColor(color));c.setLineWidth(.6);c.line(x,H-y,x+w,H-y)
c.drawImage(str(ROOT/'falcon-cover-blue-gold.png'),0,0,W,H)
c.showPage()
rect(0,0,W,H,navy)
text(M,31,'VIBE TRADER',9,'Bold')
text(W-97,31,'FALCON / 01',8,'Bold',gold)
text(M,79,'Gold breakouts.',32,'Bold')
text(M,115,'Automated.',32,'Bold',blue)
text(M,143,'Falcon watches established gold price ranges and',10.5)
text(M,158,'executes trades when its breakout rules are met.',10.5)
for x,w,label in [(M,81,'XAU/USD'),(117,116,'MT4 + MT5'),(241,150,'AI-POWERED BOT')]:
    rect(x,175,w,24,'#B98239' if x==M else '#23394E')
    text(x+12,191,label,8,'Bold',ivory)
text(M,228,'REPORTED PERFORMANCE',8,'Bold',gold)
text(300,228,'JAN - JUL 2026',7.5,'Regular',muted)
rule(M,239,W-2*M)
for x,y,val,label in [(M,276,'716','Trades executed'),(224,276,'~77%','Winning trades'),(M,338,'2.72','Profit factor'),(224,338,'24.77%','Maximum drawdown')]:
    text(x,y,val,29,'Bold',blue)
    text(x,y+15,label,9,'Regular',muted)
rule(M,303,W-2*M)
text(M,379,'Real USD account at VT Markets. MT4. 1:500 leverage.',7.7,'Regular',muted)
text(M,391,'Source: Falcon strategy page. Results vary by broker and leverage.',7.7,'Regular',muted)
rect(0,413,W,H-413,'#0A141E')
rect(M,434,25,2,'#D8B16C')
text(M,456,'See Falcon in action.',19,'Bold',ivory)
text(M,479,'Meet us at Forex Expo Dubai.',10,'Regular','#E4C286')
text(M,496,'Scan for the strategy and plans.',9,'Regular','#C0CCD2')
text(M,519,'vibetrader.com/strategies/falcon',8.5,'Bold',ivory)
url='https://www.vibetrader.com/strategies/falcon'
q=QrCodeWidget(url,barLevel='M');x0,y0,x1,y1=q.getBounds();size=75
d=Drawing(size,size,transform=[size/(x1-x0),0,0,size/(y1-y0),0,0]);d.add(q)
rect(W-M-size,441,size,size,'#FFFFFF');renderPDF.draw(d,c,W-M-size,H-516)
c.linkURL(url,(M,H-525,W-M,H-434),relative=0)
rule(M,538,W-2*M,'#3C515E')
text(M,554,'Trading leveraged gold carries a high risk of losing money.',7.2,'Regular','#C0CCD2')
text(M,566,'No trading system guarantees profits. Past performance is not',7.2,'Regular','#C0CCD2')
text(M,578,'indicative of future performance.',7.2,'Regular','#C0CCD2')
c.showPage();c.save()
