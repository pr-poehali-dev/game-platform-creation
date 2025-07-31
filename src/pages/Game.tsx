import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const initialBoard = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

const chatMessages = [
  { user: "МастерИгры", message: "Удачи!", time: "14:23", isOpponent: true },
  { user: "Вы", message: "Спасибо! Хорошей игры", time: "14:24", isOpponent: false },
  { user: "МастерИгры", message: "Интересный ход!", time: "14:28", isOpponent: true },
  { user: "Система", message: "Белые делают ход", time: "14:29", isSystem: true }
];

const gameHistory = [
  "1. e4 e5",
  "2. Nf3 Nc6", 
  "3. Bb5 a6",
  "4. Ba4 Nf6",
  "5. O-O Be7"
];

export default function Game() {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [timeWhite, setTimeWhite] = useState(600); // 10 минут
  const [timeBlack, setTimeBlack] = useState(580); // 9:40
  const [currentTurn, setCurrentTurn] = useState<'white' | 'black'>('white');

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getSquareColor = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0;
    const isSelected = selectedSquare === `${row}-${col}`;
    
    if (isSelected) return "bg-yellow-400";
    return isLight ? "bg-amber-100" : "bg-amber-800";
  };

  const handleSquareClick = (row: number, col: number) => {
    setSelectedSquare(`${row}-${col}`);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Плавающие игровые стикеры */}
        <div 
          className="absolute top-10 left-10 w-20 h-20 opacity-10 animate-bounce"
          style={{
            backgroundImage: `url('/img/f925985f-99aa-4118-9960-3704da5b0233.jpg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animationDelay: '0s',
            animationDuration: '3s'
          }}
        />
        <div 
          className="absolute top-32 right-20 w-16 h-16 opacity-15 animate-pulse"
          style={{
            backgroundImage: `url('/img/df810205-c5ba-46b0-9750-dfaf4103cc54.jpg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-24 h-24 opacity-8 animate-bounce"
          style={{
            backgroundImage: `url('/img/f925985f-99aa-4118-9960-3704da5b0233.jpg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animationDelay: '2s',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute top-1/2 left-5 w-18 h-18 opacity-12 animate-pulse"
          style={{
            backgroundImage: `url('/img/df810205-c5ba-46b0-9750-dfaf4103cc54.jpg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animationDelay: '0.5s'
          }}
        />
        <div 
          className="absolute bottom-32 right-16 w-22 h-22 opacity-10 animate-bounce"
          style={{
            backgroundImage: `url('/img/f925985f-99aa-4118-9960-3704da5b0233.jpg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animationDelay: '3s',
            animationDuration: '5s'
          }}
        />
        
        {/* Абстрактные геометрические формы */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5 animate-spin"
          style={{
            backgroundImage: `url('/img/a5e437ab-4514-469b-b47b-001fb4b064e5.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            animationDuration: '20s'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-28 h-28 opacity-6 animate-pulse"
          style={{
            backgroundImage: `url('/img/a5e437ab-4514-469b-b47b-001fb4b064e5.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            animationDelay: '2s'
          }}
        />
      </div>
      {/* Игровая навигация */}
      <nav className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Выйти из игры
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Icon name="Crown" size={14} className="text-primary-foreground" />
              </div>
              <span className="font-semibold">Шахматы Онлайн</span>
              <Badge variant="outline">Рейтинговая</Badge>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Settings" className="w-4 h-4 mr-2" />
              Настройки
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Flag" className="w-4 h-4 mr-2" />
              Сдаться
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Информация об игроках */}
          <div className="lg:col-span-1 space-y-4">
            {/* Черный игрок (противник) */}
            <Card className="relative">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-slate-600 text-white">МИ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">МастерИгры</span>
                      <Badge variant="secondary">1850</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">Мастер • 127 побед</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-mono ${currentTurn === 'black' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {formatTime(timeBlack)}
                    </div>
                    <div className="text-xs text-muted-foreground">♛ Черные</div>
                  </div>
                </div>
                {currentTurn === 'black' && (
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-primary rounded-r"></div>
                )}
              </CardContent>
            </Card>

            {/* Белый игрок (вы) */}
            <Card className="relative">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground">ВЫ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">Игрок_2024</span>
                      <Badge variant="secondary">1720</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">Эксперт • 89 побед</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-mono ${currentTurn === 'white' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {formatTime(timeWhite)}
                    </div>
                    <div className="text-xs text-muted-foreground">♔ Белые</div>
                  </div>
                </div>
                {currentTurn === 'white' && (
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-primary rounded-r"></div>
                )}
              </CardContent>
            </Card>

            {/* История ходов */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Icon name="History" className="w-4 h-4 mr-2" />
                  История ходов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48">
                  <div className="space-y-1 text-sm font-mono">
                    {gameHistory.map((move, index) => (
                      <div key={index} className="flex justify-between p-2 rounded hover:bg-muted/50">
                        <span className="text-muted-foreground">{move.split(' ')[0]}</span>
                        <div className="space-x-4">
                          <span>{move.split(' ')[1]}</span>
                          <span>{move.split(' ')[2]}</span>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between p-2 rounded bg-primary/10">
                      <span className="text-muted-foreground">6.</span>
                      <div className="space-x-4">
                        <span className="font-semibold">d3</span>
                        <span className="text-muted-foreground">...</span>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Игровое поле */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="aspect-square max-w-lg mx-auto bg-amber-900 p-4 rounded-lg shadow-2xl">
                {/* Координаты сверху */}
                <div className="flex justify-around mb-2 text-sm font-semibold text-amber-100">
                  {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(letter => (
                    <div key={letter} className="w-12 text-center">{letter}</div>
                  ))}
                </div>
                
                <div className="grid grid-cols-8 gap-0 border-2 border-amber-900">
                  {initialBoard.map((row, rowIndex) => (
                    row.map((piece, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          aspect-square flex items-center justify-center text-4xl cursor-pointer
                          transition-all duration-200 hover:scale-105 relative
                          ${getSquareColor(rowIndex, colIndex)}
                        `}
                        onClick={() => handleSquareClick(rowIndex, colIndex)}
                      >
                        {/* Координата слева */}
                        {colIndex === 0 && (
                          <div className="absolute -left-6 text-sm font-semibold text-amber-100">
                            {8 - rowIndex}
                          </div>
                        )}
                        
                        {piece && (
                          <span className="drop-shadow-sm select-none">
                            {piece}
                          </span>
                        )}
                        
                        {/* Возможные ходы */}
                        {selectedSquare === `${rowIndex}-${colIndex}` && !piece && (
                          <div className="w-4 h-4 bg-green-500 rounded-full opacity-60"></div>
                        )}
                      </div>
                    ))
                  ))}
                </div>
                
                {/* Координаты снизу */}
                <div className="flex justify-around mt-2 text-sm font-semibold text-amber-100">
                  {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(letter => (
                    <div key={letter} className="w-12 text-center">{letter}</div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Чат и дополнительная информация */}
          <div className="lg:col-span-1 space-y-4">
            {/* Состояние игры */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Info" className="w-4 h-4 mr-2" />
                  Статус игры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Ход:</span>
                  <Badge variant={currentTurn === 'white' ? 'default' : 'secondary'}>
                    {currentTurn === 'white' ? 'Белые' : 'Черные'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Ход №:</span>
                  <span className="font-medium">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Фигур:</span>
                  <span className="font-medium">32/32</span>
                </div>
                <Separator />
                <div className="text-center">
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
                    Предложить ничью
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Чат */}
            <Card className="flex-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                  Чат
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-64 px-4">
                  <div className="space-y-3">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`
                        flex ${msg.isOpponent ? 'justify-start' : 'justify-end'}
                        ${msg.isSystem ? 'justify-center' : ''}
                      `}>
                        <div className={`
                          max-w-[80%] p-2 rounded-lg text-sm
                          ${msg.isSystem ? 
                            'bg-muted text-muted-foreground text-center text-xs' :
                            msg.isOpponent ? 
                              'bg-muted text-foreground' : 
                              'bg-primary text-primary-foreground'
                          }
                        `}>
                          {!msg.isSystem && (
                            <div className={`text-xs mb-1 ${
                              msg.isOpponent ? 'text-muted-foreground' : 'text-primary-foreground/80'
                            }`}>
                              {msg.user} • {msg.time}
                            </div>
                          )}
                          <div>{msg.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Напишите сообщение..."
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="text-sm"
                    />
                    <Button size="sm" onClick={sendMessage}>
                      <Icon name="Send" className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}