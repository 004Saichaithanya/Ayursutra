import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Calendar,
  Clock,
  Heart,
  Droplets,
  Leaf,
  Star,
  ArrowRight,
  Bell,
  TrendingUp,
  Activity
} from 'lucide-react';

export function PatientDashboard({ onPageChange }) {
  const upcomingSessions = [
    {
      id: 1,
      therapy: 'Abhyanga',
      date: 'Today',
      time: '2:00 PM',
      practitioner: 'Dr. Kamal Raj',
      status: 'confirmed',
      preparation: ['Light meal 2 hours before', 'Wear comfortable clothes']
    },
    {
      id: 2,
      therapy: 'Swedana',
      date: 'Tomorrow',
      time: '10:00 AM',
      practitioner: 'Dr. Anjali Nair',
      status: 'confirmed',
      preparation: ['Hydrate well', 'Avoid heavy meals']
    }
  ];

  const recentFeedback = [
    { session: 'Abhyanga', rating: 5, mood: 'Excellent', energy: 9 },
    { session: 'Panchakarma', rating: 4, mood: 'Good', energy: 7 },
    { session: 'Swedana', rating: 5, mood: 'Very Good', energy: 8 }
  ];

  const notifications = [
    {
      id: 1,
      type: 'reminder',
      title: 'Pre-therapy Diet',
      message: 'Consume warm ghee with milk before tomorrow\'s session',
      time: '2 hours ago',
      priority: 'high'
    },
    {
      id: 2,
      type: 'schedule',
      title: 'Session Confirmed',
      message: 'Your Abhyanga session today at 2:00 PM is confirmed',
      time: '4 hours ago',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'wellness',
      title: 'Daily Yoga Reminder',
      message: 'Complete your morning yoga routine for optimal results',
      time: '6 hours ago',
      priority: 'low'
    }
  ];

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Priya!</h1>
          <p className="text-emerald-100 mb-6">Your wellness journey continues. Today is Day 5 of your 14-day Panchakarma program.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/90">Progress</p>
                  <p className="font-bold">35% Complete</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/90">Today's Session</p>
                  <p className="font-bold">Abhyanga</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/90">Wellness Score</p>
                  <p className="font-bold">8.5/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1730977806307-3351cb73a9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMHdlbGxuZXNzJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NTgzODU3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Ayurveda wellness" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-8">
          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span>Upcoming Sessions</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onPageChange('sessions')}
                  className="text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                >
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="border border-emerald-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-emerald-900">{session.therapy}</h3>
                      <div className="flex items-center space-x-4 text-sm text-emerald-600 mt-1">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-emerald-700 mt-2">with {session.practitioner}</p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      {session.status}
                    </Badge>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="font-medium text-amber-900 mb-2">Pre-therapy Preparation:</p>
                    <ul className="space-y-1">
                      {session.preparation.map((item, index) => (
                        <li key={index} className="text-sm text-amber-800 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3 mt-4">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Join Session
                    </Button>
                    <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-600">
                      Reschedule
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Progress Visualization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span>Your Progress Journey</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Treatment Progress</span>
                    <span className="text-sm text-emerald-600">5 of 14 days</span>
                  </div>
                  <Progress value={35} className="h-3" />
                  <p className="text-sm text-gray-600 mt-2">You're making excellent progress! Keep up the great work.</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-blue-800">Detox Level</p>
                    <p className="font-bold text-blue-900">78%</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                    <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-green-800">Energy Level</p>
                    <p className="font-bold text-green-900">85%</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-purple-800">Balance</p>
                    <p className="font-bold text-purple-900">92%</p>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  onClick={() => onPageChange('progress')}
                  className="w-full border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                >
                  View Detailed Progress Report
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5 text-emerald-600" />
                  <span>Notifications</span>
                </CardTitle>
                <Badge className="bg-orange-100 text-orange-700">3 New</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.slice(0, 3).map((notification) => (
                <div key={notification.id} className="flex space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notification.priority === 'high' ? 'bg-red-500' :
                    notification.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm">{notification.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onPageChange('notifications')}
                className="w-full border-emerald-200 text-emerald-600 hover:bg-emerald-50"
              >
                View All Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-emerald-600" />
                <span>Recent Feedback</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentFeedback.map((feedback, index) => (
                <div key={index} className="p-4 border border-emerald-100 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-emerald-900">{feedback.session}</p>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600">Mood: </span>
                      <span className="font-medium">{feedback.mood}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Energy: </span>
                      <span className="font-medium">{feedback.energy}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                onClick={() => onPageChange('yoga-guidance')}
                className="w-full justify-start space-x-3 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                <Heart className="w-5 h-5" />
                <span>Today's Yoga Practice</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onPageChange('diet-lifestyle')}
                className="w-full justify-start space-x-3 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                <Leaf className="w-5 h-5" />
                <span>Diet Recommendations</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onPageChange('documents')}
                className="w-full justify-start space-x-3 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                <Calendar className="w-5 h-5" />
                <span>Upload Lab Reports</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}