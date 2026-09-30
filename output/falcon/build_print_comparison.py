from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from reportlab.lib.units import mm
R=Path(__file__).parent
for n,f in [('Regular','Arial.ttf'),('Bold','Arial Bold.ttf')]: pdfmetrics.registerFont(TTFont(n,'/System/Library/Fonts/Supplemental/'+f))
W,H=148*mm,210*mm
N='#101E2B'; I='#F6F1E6'; G='#E0AC58'; M='#B8C6D2'; B='#23394E'
URL='https://www.vibetrader.com/strategies/falcon'
def t(x,y,s,z=10,f='Regular',col=I):
 c.setFillColor(HexColor(col));c.setFont(f,z);c.drawString(x,H-y,s)
def right(y,s,z=8,col=G):
 t(W-28-pdfmetrics.stringWidth(s,'Bold',z),y,s,z,'Bold',col)
def box(x,y,w,h,col):
 c.setFillColor(HexColor(col));c.rect(x,H-y-h,w,h,fill=1,stroke=0)
def line(y): box(28,y,W-56,.5,'#3B5061')
def qr(x,y,size):
 gold='#EAC477';dark='#0C1823'
 c.setFillColor(HexColor(dark));c.setStrokeColor(HexColor(gold));c.setLineWidth(.7)
 q=QrCodeWidget(URL,barLevel='M',barFillColor=HexColor(gold));a,b,d,e=q.getBounds()
 dr=Drawing(size,size,transform=[size/(d-a),0,0,size/(e-b),0,0]);dr.add(q)
 box(x,y,size,size,dark);renderPDF.draw(dr,c,x,H-y-size)
 c.linkURL(URL,(x,H-y-size,x+size,H-y),relative=0)
 label='SCAN TO EXPLORE';t(x+(size-pdfmetrics.stringWidth(label,'Bold',5.5))/2,y+size+13,label,5.5,'Bold',G)
def foot(y=551):
 for k,s in enumerate(['Trading leveraged gold carries a high risk of losing money.', 'No trading system guarantees profits. Past performance is not', 'indicative of future performance.']): t(28,y+k*11,s,7.2,col=M)
def source(y):
 t(28,y,'Jan-Jul 2026 | Real USD account | VT Markets | MT4 | 1:500 leverage',7.2,col=M)
 t(28,y+12,'Source: Falcon strategy page. Results vary by broker and leverage.',7.2,col=M)

import sys
variant=sys.argv[1] if len(sys.argv)>1 else 'subtle'
background='falcon-feather-subtle.png' if variant=='subtle' else 'falcon-bright-print-background.png'
c=canvas.Canvas(str(R/('falcon-print-'+variant+'.pdf')),pagesize=(W,H))
c.setTitle('Falcon | '+variant.title()+' print comparison');c.setAuthor('Vibe Trader')
c.drawImage(str(R/'falcon-cover-blue-gold.png'),0,0,W,H);c.showPage()
c.drawImage(str(R/background),0,0,W,H)
t(28,31,'VIBE TRADER',9,'Bold')
right(33,'FOREX EXPO / DUBAI',7.8,I)
t(28,69,'FALCON',9,'Bold',G)
t(28,110,'Your AI',38,'Bold')
t(28,150,'trading bot.',38,'Bold')
t(28,180,'Built for gold breakouts.',12,'Bold',G)
t(28,205,'Monitors gold price ranges. Executes trades',10.5)
t(28,221,'automatically when its strategy rules are met.',10.5)
t(28,247,'XAU/USD  /  MT4 + MT5',8,'Bold',M)
c.saveState();c.setFillAlpha(.93);box(0,265,W,H-265,'#0C1823');c.restoreState()
t(28,287,'REPORTED ACCOUNT GAIN',8,'Bold',M)
t(28,329,'+461.95%',43,'Bold',G)
t(28,347,'Myfxbook time-weighted gain',8.5,col=M)
# The two secondary metrics have balanced visual weight.
c.setStrokeColor(HexColor(B));c.setLineWidth(7)
c.circle(104,H-390,29,stroke=1,fill=0)
c.setStrokeColor(HexColor(G))
c.arc(75,H-419,133,H-361,startAng=90,extent=-277.2)
label='~77%';t(104-pdfmetrics.stringWidth(label,'Bold',17)/2,396,label,17,'Bold')
label='WIN RATE';t(104-pdfmetrics.stringWidth(label,'Bold',8)/2,435,label,8,'Bold',G)
box(205,367,.5,66,'#34495D')
label='2.72';t(299-pdfmetrics.stringWidth(label,'Bold',33)/2,399,label,33,'Bold')
label='PROFIT FACTOR';t(299-pdfmetrics.stringWidth(label,'Bold',8)/2,418,label,8,'Bold',G)
label='Gross profit / gross loss';t(299-pdfmetrics.stringWidth(label,'Regular',7.5)/2,434,label,7.5,col=M)
t(28,454,'Pre-branding account: AI ORO GOLD X9 | Jan-Jul 2026 history',7.2,col=M)
t(28,466,'Absolute gain +81.70% | Real USD | VT Markets | MT4 | 1:500',7.2,col=M)
line(478)
t(28,502,'See how Falcon trades.',17,'Bold',G)
t(28,523,'Scan for the strategy and plans.',9,col=M)
t(28,543,'vibetrader.com/strategies/falcon',8,'Bold')
qr(328,488,58)
foot(562)
c.showPage();c.save()
