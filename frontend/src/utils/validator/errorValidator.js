export const validateNewEvent = (newEvent, allEvents) => {
    let alertLog = "";
    const missingAttrErrorLog = checkMissingNewEvent(newEvent);
    const validateDateErrorLog = validateDate(newEvent);
    const duplicateContentLog = checkDuplicateContent(newEvent, allEvents);
    alertLog = missingAttrErrorLog + validateDateErrorLog + duplicateContentLog;

    if (alertLog !== "") {
      alert(alertLog);
      return "failed";
    } else {
      return "succeeded";
    }
  };

  const checkMissingNewEvent = (newEvent) => {
    let errorMsg = "";
    let missingContent = "";
    Object.keys(newEvent).forEach((key) => {
      if (newEvent[key] == "") {
        missingContent += `${key} `;
      }
    });
    if (missingContent !== "") errorMsg += `- Missing data: ${missingContent} \n`;
    return errorMsg;
  };

  const validateDate = (newEvent) => {
      return (newEvent["start"] > newEvent["end"]) ? "- Start date cannot be later than end date \n": "";
  };

  const checkDuplicateContent = (newEvent, allEvents) => {
    const isDupe = allEvents
      .map((eachEvent) => eachEvent.title)
      .includes(newEvent.title);
    return isDupe ? `- Cannot have duplicated title: "${newEvent.title}"`: ""
  };
