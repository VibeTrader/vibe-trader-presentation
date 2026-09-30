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
c=canvas.Canvas(str(ROOT/'falcon-expo-a5.pdf'),pagesize=(W,H))
c.setTitle('Falcon | Vibe Trader | Forex Expo Dubai')
c.setAuthor('Vibe Trader')
c.drawImage(str(ROOT/'falcon-artwork.png'),0,0,W,H)
gold='#EBC17A'; white='#F6F5F0'; muted='#B8C6CA'
def text(x,top,s,size=10,font='Regular',color=white):
    c.setFillColor(HexColor(color)); c.setFont(font,size); c.drawString(x,H-top,s)
def tracking(x,top,s,size,gap,color):
    t=c.beginText(x,H-top);t.setFont('Bold',size);t.setCharSpace(gap);t.setFillColor(HexColor(color));t.textLine(s);c.drawText(t)
M=27
text(M,31,'VIBE TRADER',11,'Bold')
text(292,31,'FOREX EXPO / DUBAI',7,'Bold',gold)
tracking(M,99,'FALCON', sixty:=60, 2, white)
text(M,126,'Gold breakout trading.',21,'Bold',gold)
text(M,151,'Automated. Rule-driven. Built for XAU/USD.',10.2)

# Keep the original generated falcon visible; set live document text beneath it.
c.setStrokeColor(HexColor(gold));c.setLineWidth(.6);c.line(M,H-410,W-M,H-410)
tracking(M,429,'XAU/USD',9,1,gold)
tracking(161,429,'MT4 + MT5',9,1,gold)
tracking(290,429,'AUTOMATED',9,1,gold)
text(M,450,'Falcon watches established gold price ranges',10)
text(M,464,'and places trades when its breakout rules are met.',10)
text(M,497,'Meet us at Forex Expo Dubai',14,'Bold')
text(M,516,'Explore Falcon. See the strategy and plans.',9.2,'Regular',muted)
text(M,537,'vibetrader.com/strategies/falcon',9,'Bold',gold)
url='https://www.vibetrader.com/strategies/falcon'
q=QrCodeWidget(url,barLevel='M');x0,y0,x1,y1=q.getBounds();size=66
d=Drawing(size,size,transform=[size/(x1-x0),0,0,size/(y1-y0),0,0]);d.add(q)
c.setFillColor(HexColor('#FFFFFF'));c.rect(W-M-size-2,H-543,size+4,size+4,fill=1,stroke=0)
renderPDF.draw(d,c,W-M-size,H-541)
c.linkURL(url,(M,H-544,W-M,H-478),relative=0)
text(M,565,'Trading leveraged gold carries a high risk of loss. No profits are guaranteed.',6.6,'Regular',muted)
text(M,576,'Past performance is not indicative of future results.',6.6,'Regular',muted)
c.showPage();c.save()
print(ROOT/'falcon-expo-a5.pdf')
