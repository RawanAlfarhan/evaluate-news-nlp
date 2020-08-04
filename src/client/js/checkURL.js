
function URLchecker(formText) {
        let url;
      
        try {
          url = new URL(formText);
        } catch (error) {
          return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
}

export {URLchecker }