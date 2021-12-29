import
{selectReportRecord, selectReportsAboutUser, Argue, reportChat,
    reportCircle, reportComment, reportOrder, reportRequest, reportUser,
    selectReportsAboutChat, selectReportsAboutCircle, selectReportsAboutComment,
    selectReportsAboutOrder, selectReportsAboutRequest, selectSendingAboutChat,
    selectSendingAboutCircle, selectSendingAboutComment, selectSendingAboutOrder,
    selectSendingAboutRequest, selectSendingAboutUser}
    from "../../api/review";

const order = {
    state:{

    },

    getters: {

    },

    mutations:{

    },

    actions: {
        selectReportRecord(context, t_id=null) {
            return new Promise((resolve, reject)=>{
                selectReportRecord(t_id).then(res=>resolve(res)).catch(err=> {
                    console.log(err);
                    reject(err);
                });
            });
        },

        selectReportsAboutUser(context, t_id) {
            return new Promise((resolve, reject)=>{
                selectReportsAboutUser (t_id).then(res=>resolve(res)).catch(err=> {
                    console.log(err);
                    reject(err);
                });
            });
        },

        reportUser(context, {t_id, desc}) {
            return new Promise((resolve, reject)=>{
                reportUser(t_id, desc).then(res=>resolve(res)).catch(err=> {
                    console.log(err);
                    reject(err);
                });
            });
        },

        reportOrder(context, {t_id, desc}) {
            return new Promise((resolve, reject)=>{
                reportOrder(t_id, desc).then(res=>resolve(res)).catch(err=> {
                    console.log(err);
                    reject(err);
                });
            });
        },

        reportChat(context, {t_id, desc}) {
            return new Promise((resolve, reject)=>{
                reportChat(t_id, desc).then(res=>resolve(res)).catch(err=> {
                    console.log(err);
                    reject(err);
                });
            });
        },

        reportCircle(context, {t_id, desc}) {
            return new Promise((resolve, reject)=>{
                reportCircle(t_id, desc).then(res=>resolve(res)).catch(err=> {
                    console.log(err);
                    reject(err);
                });
            });
        },

        reportComment (context, {t_id, desc}) {
            return new Promise((resolve, reject)=>{
                reportComment(t_id, desc).then(res=>resolve(res)).catch(err=> {
                    console.log(err);
                    reject(err);
                });
            });
        },

        argue(context, {R_id, desc}) {
            return new Promise((resolve, reject)=>{
                Argue(R_id, desc).then(res=>resolve(res)).catch(err=> {
                    console.log(err);
                    reject(err);
                });
            });
        },

    }
}

export default order;
