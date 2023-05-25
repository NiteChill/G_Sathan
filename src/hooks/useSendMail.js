function useSendMail(userMail, subject, body) {
  window.open(`mailto:${userMail}?subject=${subject}subject&body=${body}`);
}
