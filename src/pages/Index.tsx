import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const gamesList = [
  {
    id: 1,
    title: "Шахматы Онлайн",
    category: "Стратегия",
    players: "2 игрока",
    rating: 4.9,
    image: "/placeholder.svg",
    status: "online"
  },
  {
    id: 2,
    title: "Уно Делюкс",
    category: "Карточная",
    players: "2-8 игроков",
    rating: 4.7,
    image: "/placeholder.svg",
    status: "popular"
  },
  {
    id: 3,
    title: "Монополия",
    category: "Стратегия",
    players: "2-6 игроков",
    rating: 4.8,
    image: "/placeholder.svg",
    status: "new"
  },
  {
    id: 4,
    title: "Крокодил",
    category: "Вечеринка",
    players: "4+ игроков",
    rating: 4.6,
    image: "/placeholder.svg",
    status: "online"
  },
  {
    id: 5,
    title: "Скрэббл",
    category: "Словесная",
    players: "2-4 игрока",
    rating: 4.5,
    image: "/placeholder.svg",
    status: "popular"
  },
  {
    id: 6,
    title: "Покер Техас",
    category: "Карточная",
    players: "2-10 игроков",
    rating: 4.8,
    image: "/placeholder.svg",
    status: "online"
  }
];

const achievements = [
  { name: "Первая победа", progress: 100, total: 1 },
  { name: "Мастер стратегии", progress: 75, total: 100 },
  { name: "Социальный игрок", progress: 60, total: 50 },
  { name: "Коллекционер", progress: 30, total: 25 }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Навигация */}
      <nav className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={20} className="text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GameSpace
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Игры</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Турниры</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Сообщество</a>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Icon name="LogIn" className="w-4 h-4 mr-2" />
              Войти
            </Button>
            <Button size="sm">
              Играть
            </Button>
          </div>
        </div>
      </nav>

      {/* Главный баннер */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Игровая платформа
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Сотни настольных игр онлайн. Играйте с друзьями или находите новых соперников со всего мира
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Начать играть
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Users" className="w-5 h-5 mr-2" />
              Найти друзей
            </Button>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Игр</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Игроков</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Онлайн</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Партий</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Основной контент */}
      <div className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="games" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px] lg:mx-auto">
            <TabsTrigger value="games">Каталог игр</TabsTrigger>
            <TabsTrigger value="tournaments">Турниры</TabsTrigger>
            <TabsTrigger value="profile">Профиль</TabsTrigger>
          </TabsList>

          {/* Каталог игр */}
          <TabsContent value="games" className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-2xl font-semibold">Популярные игры</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Все</Badge>
                <Badge variant="outline">Стратегия</Badge>
                <Badge variant="outline">Карточные</Badge>
                <Badge variant="outline">Вечеринка</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gamesList.map((game) => (
                <Card key={game.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                      <Icon name="Gamepad2" size={48} className="text-primary/60" />
                    </div>
                    {game.status === 'new' && (
                      <Badge className="absolute top-2 right-2 bg-green-500">Новая</Badge>
                    )}
                    {game.status === 'popular' && (
                      <Badge className="absolute top-2 right-2 bg-orange-500">Хит</Badge>
                    )}
                    {game.status === 'online' && (
                      <div className="absolute top-2 left-2 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
                        <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">Онлайн</span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{game.title}</CardTitle>
                        <CardDescription>{game.category} • {game.players}</CardDescription>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Star" size={16} className="text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{game.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Icon name="Play" className="w-4 h-4 mr-2" />
                        Играть
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Heart" className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Турниры */}
          <TabsContent value="tournaments" className="space-y-8">
            <h3 className="text-2xl font-semibold">Активные турниры</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Icon name="Trophy" className="w-5 h-5 mr-2 text-yellow-500" />
                      Чемпионат по шахматам
                    </CardTitle>
                    <Badge>Скоро</Badge>
                  </div>
                  <CardDescription>Призовой фонд: 50,000₽</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Участников: 234/500</span>
                      <span>До старта: 2 дня</span>
                    </div>
                    <Progress value={47} className="h-2" />
                  </div>
                  <Button className="w-full">
                    <Icon name="UserPlus" className="w-4 h-4 mr-2" />
                    Участвовать
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Icon name="Zap" className="w-5 h-5 mr-2 text-green-500" />
                      Блиц-турнир Покер
                    </CardTitle>
                    <Badge variant="outline">Активен</Badge>
                  </div>
                  <CardDescription>Быстрые партии, большие выигрыши</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Участников: 89/100</span>
                      <span>Осталось: 3 часа</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Play" className="w-4 h-4 mr-2" />
                    Играть сейчас
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Профиль */}
          <TabsContent value="profile" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Основная информация */}
              <Card className="lg:col-span-1">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">ИГ</AvatarFallback>
                  </Avatar>
                  <CardTitle>Игрок_2024</CardTitle>
                  <CardDescription>Уровень 12 • Рейтинг: 1,847</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Сыграно игр:</span>
                      <span className="font-medium">324</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Победы:</span>
                      <span className="font-medium text-green-600">198 (61%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Онлайн время:</span>
                      <span className="font-medium">127 часов</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Icon name="Settings" className="w-4 h-4 mr-2" />
                      Настройки
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Достижения */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Award" className="w-5 h-5 mr-2 text-yellow-500" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{achievement.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {achievement.progress}/{achievement.total}
                          </span>
                        </div>
                        <Progress 
                          value={(achievement.progress / achievement.total) * 100} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Последние игры */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="w-5 h-5 mr-2" />
                  Последние игры
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { game: "Шахматы", opponent: "МастерИгры", result: "Победа", time: "2 часа назад" },
                    { game: "Покер", opponent: "ЛакиПлеер", result: "Поражение", time: "5 часов назад" },
                    { game: "Уно", opponent: "КартМастер", result: "Победа", time: "1 день назад" }
                  ].map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          <Icon name="Gamepad2" size={20} />
                        </div>
                        <div>
                          <div className="font-medium">{match.game}</div>
                          <div className="text-sm text-muted-foreground">vs {match.opponent}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={match.result === "Победа" ? "default" : "secondary"}
                          className={match.result === "Победа" ? "bg-green-500" : ""}
                        >
                          {match.result}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">{match.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}