export const GetAdminData = async () => {
    try {
        const response = await fetch("http://localhost:8003/getadmindata");
        const data = await response.json();
        return data
    } catch (error) {
        throw error
    }
}