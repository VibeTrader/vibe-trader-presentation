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
def header(style):
 t(28,31,'VIBE TRADER',9,'Bold')
 if style==2:
  box(257,18,135,23,B);t(382-pdfmetrics.stringWidth('FOREX EXPO / DUBAI','Bold',7.7),33,'FOREX EXPO / DUBAI',7.7,'Bold',G)
 elif style==3:
  right(25,'FOREX EXPO',8);right(39,'DUBAI',8,I)
 else: right(31,'FOREX EXPO / DUBAI',8)
def a():
 header(1)
 t(28,82,'Gold breakouts.',32,'Bold');t(28,117,'Automated.',32,'Bold',G)
 t(28,146,'Falcon watches established gold price ranges and',10.5)
 t(28,162,'executes trades when its breakout rules are met.',10.5)
 t(28,194,'XAU/USD   /   MT4 + MT5   /   AI-POWERED BOT',9,'Bold',G)
 line(212);t(28,237,'REPORTED PERFORMANCE',8,'Bold',M)
 for x,y,val,label in [(28,280,'716','Trades executed'),(222,280,'~77%','Winning trades'),(28,345,'2.72','Profit factor'),(222,345,'24.77%','Maximum drawdown')]:
  t(x,y,val,31,'Bold',G);t(x,y+16,label,9,col=M)
 source(389)
 box(0,423,W,H-423,'#0A141E')
 t(28,455,'Meet Falcon in Dubai.',19,'Bold');t(28,478,'Explore the strategy and plans.',10,col=M)
 t(28,513,'vibetrader.com/strategies/falcon',8.5,'Bold',G);qr(316,443,75)
 foot()
def b():
 header(2)
 t(28,87,'FALCON',42,'Bold');t(28,114,'AI-powered gold trading.',20,col=G)
 box(28,134,363,41,B)
 t(40,151,'XAU/USD',10,'Bold');t(153,151,'MT4 + MT5',10,'Bold');t(285,151,'AUTOMATED',9,'Bold')
 t(40,166,'Gold breakout strategy',8,col=M)
 t(28,201,'Watches the range. Trades the breakout.',13,'Bold')
 t(28,219,'Orders execute when Falcon\'s trading rules are met.',10,col=M)
 t(28,249,'REPORTED PERFORMANCE',8,'Bold',G)
 for x,y,val,label in [(28,263,'716','Trades executed'),(215,263,'~77%','Winning trades'),(28,335,'2.72','Profit factor'),(215,335,'24.77%','Maximum drawdown')]:
  box(x,y,176,62,B);box(x,y,2,62,G);t(x+13,y+32,val,28,'Bold');t(x+13,y+49,label,9,col=M)
 source(414)
 box(28,445,363,83,G)
 t(40,471,'Let\'s talk gold.',20,'Bold',N);t(40,490,'Meet us at Forex Expo Dubai.',9,col=N)
 t(40,511,'vibetrader.com/strategies/falcon',8,'Bold',N);qr(316,453,67)
 foot()
def d():
 header(3)
 box(28,62,3,106,G)
 t(44,89,'Focused on gold.',29,'Bold');t(44,123,'Driven by AI.',29,'Bold',G)
 t(44,151,'FALCON  /  XAU/USD  /  MT4 + MT5',8,'Bold',M)
 t(28,194,'From price range to breakout.',17,'Bold')
 t(28,216,'Falcon monitors established gold price ranges',10,col=M)
 t(28,232,'and places trades when its breakout rules are met.',10,col=M)
 line(251);t(28,273,'REPORTED PERFORMANCE',8,'Bold',G)
 for y,v,l in [(305,'716','Trades executed'),(337,'~77%','Winning trades'),(369,'2.72','Profit factor'),(401,'24.77%','Maximum drawdown')]:
  t(28,y,l,11,col=M);right(y,v,22,G);line(y+9)
 source(432)
 t(28,476,'Explore Falcon.',18,'Bold');t(28,496,'Scan for Falcon\'s strategy and plans.',9,col=M)
 t(28,519,'vibetrader.com/strategies/falcon',8,'Bold',G);qr(326,455,65)
 foot()

c=canvas.Canvas(str(R/'falcon-reported-gain-bright.pdf'),pagesize=(W,H));c.setTitle('Falcon | AI trading bot');c.setAuthor('Vibe Trader')
c.drawImage(str(R/'falcon-cover-blue-gold.png'),0,0,W,H);c.showPage()
c.drawImage(str(R/'falcon-bright-print-background.png'),0,0,W,H)
t(28,31,'VIBE TRADER',9,'Bold')

right(33,'FOREX EXPO / DUBAI',7.8,I)
t(28,85,'FALCON',9,'Bold',G)
t(28,127,'Your AI',40,'Bold')
t(28,171,'trading bot.',40,'Bold')
t(28,204,'Built for gold breakouts.',12,'Bold',G)
t(28,231,'Monitors XAU/USD price ranges.',10.5,col=I)
t(28,247,'Places trades when its rules are met.',10.5,col=I)
t(28,278,'XAU/USD  /  MT4 + MT5',8,'Bold',M)
c.saveState();c.setFillAlpha(.93);box(0,298,W,H-298,'#0C1823');c.restoreState()
box(28,316,25,2,G)
t(65,320,'REPORTED PERFORMANCE',8,'Bold',G)
t(28,361,'+461.95%',40,'Bold',G)
t(259,345,'REPORTED',8,'Bold',M)
t(259,360,'ACCOUNT GAIN',8,'Bold',M)
c.setStrokeColor(HexColor(B));c.setLineWidth(4)
c.circle(49,H-397,18,stroke=1,fill=0)
c.setStrokeColor(HexColor(G))
c.arc(31,H-415,67,H-379,startAng=90,extent=-277.2)
t(78,398,'~77%',22,'Bold');t(78,413,'Win rate',8,col=M)
t(195,398,'2.72',22,'Bold');t(195,413,'Profit factor',8,col=M)
t(310,398,'716',22,'Bold');t(310,413,'Trades',8,col=M)
t(28,434,'Myfxbook time-weighted gain; absolute gain +81.70%.',7.2,col=M)
t(28,446,'Pre-branding reference account: AI ORO GOLD X9. Results vary.',7.2,col=M)
t(28,458,'Real USD | VT Markets | MT4 | 1:500 | Last updated 21 Aug 2026',7.2,col=M)
line(468)
t(28,493,'Explore Falcon.',18,'Bold',G)
t(28,513,'Scan for the strategy and plans.',9,col=M)
t(28,534,'vibetrader.com/strategies/falcon',8,'Bold')
qr(328,480,62)
foot(559)
c.showPage();c.save()
