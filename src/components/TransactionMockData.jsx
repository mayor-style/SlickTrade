export const mockData = [
    {
      id: 'TRX001',
      amount: 500,
      status: 'Completed',
      service: 'PayPal Pickup',
      user: {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
      },
      vendor: {
        id: 'vendor1',
        name: 'Vendor1',
        rating: 4.5,
      },
      date: 'December 27, 2024',
      time: '10:00 AM',
      platformFee: 25,
      netAmount: 475,
      notes: 'Transaction completed via PayPal Pickup.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX002',
      amount: 300,
      status: 'Pending',
      service: 'Zelle Pickup',
      user: {
        name: 'John Smith',
        email: 'johnsmith@gmail.com',
      },
      vendor: {
        id: 'vendor2',
        name: 'Vendor2',
        rating: 4.7,
      },
      date: 'December 26, 2024',
      time: '11:30 AM',
      platformFee: 15,
      netAmount: 285,
      notes: 'Transaction is still in progress via Zelle Pickup.',
      canOpenDispute: true, // Ongoing transaction
    },
    {
      id: 'TRX003',
      amount: 90,
      status: 'Cancelled',
      service: 'Zelle',
      user: {
        name: 'Alice Johnson',
        email: 'alicejohnson@gmail.com',
      },
      vendor: {
        id: 'vendor789',
        name: 'Vendor789',
        rating: 4.2,
      },
      date: 'December 25, 2024',
      time: '02:00 PM',
      platformFee: 5,
      netAmount: 85,
      notes: 'Transaction was cancelled by the user.',
      canOpenDispute: false, // Cancelled transaction
    },
    {
      id: 'TRX004',
      amount: 980,
      status: 'Disputed',
      service: 'GiftCard Redeem',
      user: {
        name: 'Michael Brown',
        email: 'michaelbrown@gmail.com',
      },
      vendor: {
        id: 'vendor101',
        name: 'Vendor101',
        rating: 4.8,
      },
      date: 'December 24, 2024',
      time: '04:15 PM',
      platformFee: 50,
      netAmount: 930,
      notes: 'Transaction is under dispute for incorrect amount transfer.',
      canOpenDispute: true, // Already disputed
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
    {
      id: 'TRX005',
      amount: 794,
      status: 'Completed',
      service: 'Purchase of Log',
      user: {
        name: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
      },
      vendor: {
        id: 'vendor202',
        name: 'Vendor202',
        rating: 4.9,
      },
      date: 'December 23, 2024',
      time: '01:45 PM',
      platformFee: 40,
      netAmount: 754,
      notes: 'Transaction successfully completed for a log purchase.',
      canOpenDispute: false, // Completed transaction
    },
  ];
  
  // Logic for canOpenDispute field
  mockData.forEach(transaction => {
    if (transaction.status === 'Completed' || transaction.status === 'Cancelled') {
      transaction.canOpenDispute = false;
    } else {
      transaction.canOpenDispute = true;
    }
  });
  