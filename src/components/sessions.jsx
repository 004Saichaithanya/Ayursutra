import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Feedback } from './feedback';
import {
  Calendar,
  Clock,
  User,
  MapPin,
  FileText,
  Edit,
  X,
  Eye,
  Star,
  CheckCircle,
  AlertCircle,
  MessageSquare
} from 'lucide-react';

/**
 * @param {{ onPageChange: (page: string) => void }} props
 */
export function Sessions({ onPageChange }) {
  const [selectedSession, setSelectedSession] = React.useState(null);
  const [feedbackSession, setFeedbackSession] = React.useState(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = React.useState(false);

  const upcomingSessions = [
    {
      id: 1,
      therapy: 'Abhyanga',
      date: '2025-09-21',
      time: '2:00 PM',
      duration: '60 minutes',
      practitioner: 'Dr. Kamal Raj',
      location: 'Treatment Room A',
      status: 'confirmed',
      sessionId: 'SES001',
      preparation: ['Light meal 2 hours before', 'Wear comfortable clothes', 'Arrive 15 minutes early'],
      notes: 'First session of the treatment cycle'
    },
    {
      id: 2,
      therapy: 'Swedana',
      date: '2025-09-22',
      time: '10:00 AM',
      duration: '45 minutes',
      practitioner: 'Dr. Anjali Nair',
      location: 'Treatment Room B',
      status: 'confirmed',
      sessionId: 'SES002',
      preparation: ['Hydrate well', 'Avoid heavy meals', 'Bring water bottle'],
      notes: 'Steam therapy session - second in series'
    },
    {
      id: 3,
      therapy: 'Panchakarma',
      date: '2025-09-24',
      time: '11:00 AM',
      duration: '90 minutes',
      practitioner: 'Dr. Kamal Raj',
      location: 'Main Treatment Hall',
      status: 'pending',
      sessionId: 'SES003',
      preparation: [
        'Fasting required 12 hours before',
        'Complete pre-treatment cleanse',
        'Bring comfortable change of clothes'
      ],
      notes: 'Intensive detox session - requires full preparation'
    }
  ];

  const previousSessions = [
    {
      id: 4,
      therapy: 'Abhyanga',
      date: '2025-09-19',
      time: '2:00 PM',
      duration: '60 minutes',
      practitioner: 'Dr. Kamal Raj',
      location: 'Treatment Room A',
      status: 'completed',
      sessionId: 'SES004',
      feedback: {
        rating: 5,
        mood: 'Excellent',
        energy: 9,
        comments: 'Felt very relaxed and energized. The oil temperature was perfect.'
      },
      report: 'Available',
      notes: 'Patient responded well to treatment'
    },
    {
      id: 5,
      therapy: 'Consultation',
      date: '2025-09-17',
      time: '4:00 PM',
      duration: '30 minutes',
      practitioner: 'Dr. Kamal Raj',
      location: 'Consultation Room',
      status: 'completed',
      sessionId: 'SES005',
      feedback: {
        rating: 5,
        mood: 'Good',
        energy: 8,
        comments: 'Very thorough consultation. Doctor explained everything clearly.'
      },
      report: 'Available',
      notes: 'Initial assessment completed'
    },
    {
      id: 6,
      therapy: 'Swedana',
      date: '2025-09-15',
      time: '3:00 PM',
      duration: '45 minutes',
      practitioner: 'Dr. Anjali Nair',
      location: 'Treatment Room B',
      status: 'completed',
      sessionId: 'SES006',
      feedback: {
        rating: 4,
        mood: 'Very Good',
        energy: 7,
        comments: 'Good session but felt a bit too warm. Overall positive experience.'
      },
      report: 'Available',
      notes: 'Adjust temperature for next session'
    }
  ];

  const handleModifySession = (session) => {
    console.log('Modifying session:', session.id);
  };

  const handleCancelSession = (session) => {
    console.log('Cancelling session:', session.id);
  };

  const handleViewReport = (session) => {
    console.log('Viewing report for session:', session.id);
  };

  const handleProvideFeedback = (session) => {
    setFeedbackSession(session);
    setIsFeedbackOpen(true);
  };

  const SessionCard = ({ session, isUpcoming = true }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="font-medium text-emerald-900">{session.therapy}</h3>
              <Badge
                className={
                  session.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : session.status === 'confirmed'
                    ? 'bg-blue-100 text-blue-700'
                    : session.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }
              >
                {session.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-emerald-600 mb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(session.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>
                  {session.time} ({session.duration})
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{session.practitioner}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{session.location}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-3">Session ID: {session.sessionId}</p>
            <p className="text-sm text-gray-700">{session.notes}</p>

            {isUpcoming && session.preparation && (
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="font-medium text-amber-900 mb-2">Preparation Required:</p>
                <ul className="space-y-1">
                  {session.preparation.map((item, index) => (
                    <li key={index} className="text-sm text-amber-800 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!isUpcoming && session.feedback && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-medium text-green-900 mb-2">Your Feedback:</p>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < session.feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-green-700">Mood: {session.feedback.mood}</span>
                  <span className="text-sm text-green-700">Energy: {session.feedback.energy}/10</span>
                </div>
                <p className="text-sm text-green-700 italic">"{session.feedback.comments}"</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-3">
          {isUpcoming ? (
            <>
              <Button
                size="sm"
                onClick={() => handleModifySession(session)}
                variant="outline"
                className="border-emerald-200 text-emerald-600"
              >
                <Edit className="w-4 h-4 mr-2" />
                Modify
              </Button>
              <Button
                size="sm"
                onClick={() => handleCancelSession(session)}
                variant="outline"
                className="border-red-200 text-red-600"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Session Details - {session.therapy}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-gray-900">Date & Time</p>
                        <p className="text-gray-600">
                          {new Date(session.date).toLocaleDateString()} at {session.time}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Duration</p>
                        <p className="text-gray-600">{session.duration}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Practitioner</p>
                        <p className="text-gray-600">{session.practitioner}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">{session.location}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Preparation Instructions</p>
                      <ul className="space-y-1">
                        {session.preparation?.map((item, index) => (
                          <li key={index} className="text-gray-600 flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </>
          ) : (
            <>
              <Button size="sm" onClick={() => handleViewReport(session)} className="bg-emerald-600 hover:bg-emerald-700">
                <FileText className="w-4 h-4 mr-2" />
                View Report
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleProvideFeedback(session)}
                className="border-emerald-200 text-emerald-600"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Add Feedback
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="border-emerald-200 text-emerald-600">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Session Report - {session.therapy}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-gray-900">Date & Time</p>
                        <p className="text-gray-600">
                          {new Date(session.date).toLocaleDateString()} at {session.time}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Duration</p>
                        <p className="text-gray-600">{session.duration}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Practitioner</p>
                        <p className="text-gray-600">{session.practitioner}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Status</p>
                        <Badge className="bg-green-100 text-green-700">{session.status}</Badge>
                      </div>
                    </div>
                    {session.feedback && (
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Your Feedback</p>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center space-x-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < session.feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm">Mood: {session.feedback.mood}</span>
                            <span className="text-sm">Energy: {session.feedback.energy}/10</span>
                          </div>
                          <p className="text-gray-700 italic">"{session.feedback.comments}"</p>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">My Sessions</h1>
        <p className="text-emerald-100 mb-6">Manage your therapy sessions, view reports, and track your progress</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2" />
            <p className="text-emerald-100">Completed</p>
            <p className="text-2xl font-bold">{previousSessions.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2" />
            <p className="text-emerald-100">Upcoming</p>
            <p className="text-2xl font-bold">{upcomingSessions.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <p className="text-emerald-100">Next Session</p>
            <p className="font-bold">Today 2:00 PM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Star className="w-8 h-8 mx-auto mb-2" />
            <p className="text-emerald-100">Avg Rating</p>
            <p className="text-2xl font-bold">4.7</p>
          </div>
        </div>
      </div>

      {/* Sessions Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Upcoming Sessions</span>
          </TabsTrigger>
          <TabsTrigger value="previous" className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Previous Sessions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <SessionCard key={session.id} session={session} isUpcoming />
            ))}
          </div>

          {upcomingSessions.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">No Upcoming Sessions</h3>
                <p className="text-gray-600 mb-4">No sessions are scheduled yet.</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Schedule New Session</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="previous" className="space-y-6">
          <div className="space-y-4">
            {previousSessions.map((session) => (
              <SessionCard key={session.id} session={session} isUpcoming={false} />
            ))}
          </div>

          {previousSessions.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">No Previous Sessions</h3>
                <p className="text-gray-600">Completed sessions will appear here.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Feedback Dialog */}
      <Feedback
        isOpen={isFeedbackOpen}
        onClose={() => {
          setIsFeedbackOpen(false);
          setFeedbackSession(null);
        }}
        sessionData={
          feedbackSession
            ? {
                therapy: feedbackSession.therapy,
                date: new Date(feedbackSession.date).toLocaleDateString(),
                practitioner: feedbackSession.practitioner
              }
            : undefined
        }
      />
    </div>
  );
}
