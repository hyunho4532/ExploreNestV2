import '../../@model/Language'

interface ApiResponse {
    data: {
        status: string,
        language: Language[];
    }
}

export default ApiResponse;