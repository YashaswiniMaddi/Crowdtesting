// api.js
const authAPI = {
  login: async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
    return auth.currentUser;
  },
  register: async (name, email, password, role) => {
    await auth.createUserWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    await db.collection('users').doc(user.uid).set({
      name: name,
      email: email,
      role: role
    });
    return user;
  },
  logout: async () => {
    await auth.signOut();
  }
};
  
  const projectsAPI = {
    createProject: async (projectData) => {
      const user = auth.currentUser;
      const userDoc = await db.collection('users').doc(user.uid).get();
      const userData = userDoc.data();
      await db.collection('projects').add({
        ...projectData,
        developerId: user.uid,
        developerName: userData.name,
        createdAt: new Date(),
        status: 'open',
        bugs: 0
      });
    },
    
    getAvailableProjects: async () => {
      const snapshot = await db.collection('projects').where('status', '==', 'open').get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    
    getProjects: async () => {
      const user = auth.currentUser;
      const snapshot = await db.collection('projects').where('developerId', '==', user.uid).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  };
  
  const bugsAPI = {
    reportBug: async (bugData) => {
      const user = auth.currentUser;
      const userDoc = await db.collection('users').doc(user.uid).get();
      const userData = userDoc.data();
      
      const projectDoc = await db.collection('projects').doc(bugData.projectId).get();
      const projectData = projectDoc.data();
      
      await db.collection('bugs').add({
        ...bugData,
        testerId: user.uid,
        testerName: userData.name,
        projectName: projectData.name,
        developerId: projectData.developerId,
        status: 'open',
        createdAt: new Date()
      });
      
      await db.collection('projects').doc(bugData.projectId).update({
        bugs: (projectData.bugs || 0) + 1
      });
    },
    
    getDeveloperBugs: async () => {
      const user = auth.currentUser;
      const snapshot = await db.collection('bugs').where('developerId', '==', user.uid).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    
    getTesterBugs: async () => {
      const user = auth.currentUser;
      const snapshot = await db.collection('bugs').where('testerId', '==', user.uid).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  };
  
  const API = {
    auth: authAPI,
    projects: projectsAPI,
    bugs: bugsAPI
  };
  
  window.API = API;